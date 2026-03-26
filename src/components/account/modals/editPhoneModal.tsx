import Button from "@/components/ui/Button";
import Modal from "@/components/ui/Modal";
import SectionHeader from "@/components/ui/SectionHeader";
import TextField from "@/components/ui/TextField";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { selectUser } from "@/redux/selectors";
import { updateUserProfileThunk } from "@/redux/slices/authSlice";
import { useState } from "react";
import { FaSpinner } from "react-icons/fa";

type EditPhoneModalProps = {
  onClose: () => void;
  isOpen: boolean;
};

export default function EditPhoneModal({
  onClose,
  isOpen,
}: EditPhoneModalProps) {
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectUser);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [phone, setPhone] = useState(user?.phone || "");

  const resetForm = () => {
    setPhone(user?.phone || "");
  };

  const handleClose = () => {
    resetForm();
    onClose();
  };

  const isChanged = phone !== user?.phone;

  const handleUpdatePhone = async () => {
    try {
      setLoading(true);
      setError("");

      if (!phone.trim()) {
        setError("Phone number is required");
        return;
      }

      await dispatch(
        updateUserProfileThunk({
          phone: phone.trim(),
        }),
      );

      onClose();
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
          <Button variant="outline" onClick={handleClose}>
            Cancel
          </Button>
          <Button
            className="w-full max-w-37.5"
            onClick={handleUpdatePhone}
            disabled={loading || !phone || !isChanged}
          >
            {loading ? <FaSpinner className="animate-spin" /> : "Submit"}
          </Button>
        </div>
      </div>
    </Modal>
  );
}
