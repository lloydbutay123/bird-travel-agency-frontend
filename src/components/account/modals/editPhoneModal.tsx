import Button from "@/components/ui/Button";
import Modal from "@/components/ui/Modal";
import SectionHeader from "@/components/ui/SectionHeader";
import TextField from "@/components/ui/TextField";
import { API_URL } from "@/lib/api";
import { useAppSelector } from "@/redux/hooks";
import { updateUser } from "@/redux/slices/authSlice";
import { RootState } from "@/redux/store";
import { useState } from "react";
import { FaSpinner } from "react-icons/fa";
import { useDispatch } from "react-redux";

type EditPhoneModalProps = {
  onClose: () => void;
  isOpen: boolean;
};

export default function EditPhoneModal({
  onClose,
  isOpen,
}: EditPhoneModalProps) {
  const dispatch = useDispatch();
  const { user } = useAppSelector((state: RootState) => state.auth);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [phone, setPhone] = useState(user?.phone || "");

  const handleUpdatePhone = async () => {
    try {
      setLoading(true);
      setError("");

      if (!phone.trim()) {
        setError("Phone number is required");
        return;
      }

      const res = await fetch(`${API_URL}/api/v1/users/me`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({ phone }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Update failed");
        return;
      }

      onClose();

      dispatch(
        updateUser({
          phone,
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
        <SectionHeader title="Update Phone Number" />
        <div className="flex flex-col gap-6">
          <TextField
            label="Phone number"
            name="phone"
            type="tel"
            inputMode="tel"
            value={phone}
            placeholder="Enter phone number"
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        {error && <p className="text-[16px] text-red-500">{error}</p>}
        <div className="flex gap-2 justify-end">
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button
            className="w-full max-w-37.5"
            onClick={handleUpdatePhone}
            disabled={loading || !phone}
          >
            {loading ? <FaSpinner className="animate-spin" /> : "Submit"}
          </Button>
        </div>
      </div>
    </Modal>
  );
}
