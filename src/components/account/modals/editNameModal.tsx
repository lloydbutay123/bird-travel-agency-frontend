import Button from "@/components/ui/Button";
import Modal from "@/components/ui/Modal";
import SectionHeader from "@/components/ui/SectionHeader";
import TextField from "@/components/ui/TextField";
import { API_URL } from "@/lib/api";
import { updateUser } from "@/redux/slices/authSlice";
import { RootState } from "@/redux/store";
import { useState } from "react";
import { FaSpinner } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";

type EditNameModalProps = {
  onClose: () => void;
  isOpen: boolean;
};

export default function EditNameModal({ onClose, isOpen }: EditNameModalProps) {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const { user } = useSelector((state: RootState) => state.auth);

  const [firstName, setFirstName] = useState(user?.firstName || "");
  const [lastName, setLastName] = useState(user?.lastName || "");

  const handleUpdateName = async () => {
    try {
      setLoading(true);
      setError("");

      if (!firstName.trim() || !lastName.trim()) {
        setError("First name and last name are required");
        return;
      }

      const res = await fetch(`${API_URL}/api/v1/users/me`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({ firstName, lastName }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Update failed");
        return;
      }

      onClose();

      dispatch(
        updateUser({
          firstName,
          lastName,
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
    <Modal onClose={onClose} isOpen={isOpen}>
      <div className="flex flex-col gap-10">
        <SectionHeader
          title="Update Name"
          subtitle="Ensure your name matches your travel documents."
        />

        <div className="flex flex-col gap-6">
          <TextField
            label="First Name"
            name="firstName"
            type="text"
            value={firstName}
            placeholder="Enter firstname"
            onChange={(e) => setFirstName(e.target.value)}
          />

          <TextField
            label="Last Name"
            name="lastName"
            type="text"
            value={lastName}
            placeholder="Enter lastname"
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        {error && <p className="text-[16px] text-red-500">{error}</p>}

        <div className="flex gap-2 justify-end">
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button
            className="w-full max-w-37.5"
            onClick={handleUpdateName}
            disabled={loading || !firstName || !lastName}
          >
            {loading ? <FaSpinner className="animate-spin" /> : "Submit"}
          </Button>
        </div>
      </div>
    </Modal>
  );
}
