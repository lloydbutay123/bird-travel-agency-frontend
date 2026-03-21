import Button from "@/components/ui/Button";
import Modal from "@/components/ui/Modal";
import SectionHeader from "@/components/ui/SectionHeader";
import TextField from "@/components/ui/TextField";
import { API_URL } from "@/lib/api";
import { updateUser } from "@/redux/slices/authSlice";
import { RootState } from "@/redux/store";
import { useEffect, useState } from "react";
import { FaSpinner } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";

type EditDateOfBirthModalProps = {
  onClose: () => void;
  isOpen: boolean;
};

const formatDateForInput = (date?: string | Date | null) => {
  if (!date) return "";
  const d = new Date(date);
  if (isNaN(d.getTime())) return "";
  return d.toISOString().split("T")[0];
};

export default function EditDateOfBirthModal({
  onClose,
  isOpen,
}: EditDateOfBirthModalProps) {
  const dispatch = useDispatch();

  const { user } = useSelector((state: RootState) => state.auth);
  const [dateOfBirth, setDateOfBirth] = useState(
    formatDateForInput(user?.dateOfBirth),
  );

  useEffect(() => {
    if (isOpen) {
      setDateOfBirth(formatDateForInput(user?.dateOfBirth));
      setError("");
    }
  }, [isOpen, user?.dateOfBirth]);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const resetForm = () => {
    setDateOfBirth(formatDateForInput(user?.dateOfBirth));
  };

  const isChanged = dateOfBirth !== formatDateForInput(user?.dateOfBirth);

  const handleClose = () => {
    resetForm();
    onClose();
  };

  const handleUpdateDateOfBirth = async () => {
    try {
      setLoading(true);
      setError("");

      const res = await fetch(`${API_URL}/api/v1/users/me`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({ dateOfBirth }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Update failed");
        return;
      }

      onClose();

      dispatch(
        updateUser({
          dateOfBirth,
        }),
      );
    } catch (error) {
      setError("Something went wrong. Please try again");
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal onClose={handleClose} isOpen={isOpen}>
      <div className="flex flex-col gap-10">
        <SectionHeader
          title="Date of birth"
          subtitle="Your birth date is used for identity verification and personalization."
        />
        <div className="flex flex-col gap-6">
          <TextField
            label="Date of Birth"
            name="dateOfBirth"
            type="date"
            value={dateOfBirth || ""}
            placeholder="Enter you date of birth"
            onChange={(e) => setDateOfBirth(e.target.value)}
          />
        </div>
        {error && <p className="text-[16px] text-red-500">{error}</p>}
        <div className="flex gap-2 justify-end">
          <Button variant="outline" onClick={handleClose}>
            Cancel
          </Button>
          <Button
            className="w-full max-w-37.5"
            onClick={handleUpdateDateOfBirth}
            disabled={loading || !dateOfBirth || !isChanged}
          >
            {loading ? <FaSpinner className="animate-spin" /> : "Submit"}
          </Button>
        </div>
      </div>
    </Modal>
  );
}
