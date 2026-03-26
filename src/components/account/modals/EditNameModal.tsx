import Button from "@/components/ui/Button";
import Modal from "@/components/ui/Modal";
import SectionHeader from "@/components/ui/SectionHeader";
import TextField from "@/components/ui/TextField";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { selectUser } from "@/redux/selectors";
import { updateUserProfileThunk } from "@/redux/slices/authSlice";
import { useState } from "react";
import { FaSpinner } from "react-icons/fa";

type EditNameModalProps = {
  onClose: () => void;
  isOpen: boolean;
};

export default function EditNameModal({ onClose, isOpen }: EditNameModalProps) {
  const dispatch = useAppDispatch();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const user = useAppSelector(selectUser);

  const [firstName, setFirstName] = useState(user?.firstName || "");
  const [lastName, setLastName] = useState(user?.lastName || "");

  const isChanged = firstName !== user?.firstName || lastName !== user.lastName;

  const resetForm = () => {
    setFirstName(user?.firstName || "");
    setLastName(user?.lastName || "");
    setError("");
  };

  const handleClose = () => {
    resetForm();
    onClose();
  };

  const handleUpdateName = async () => {
    try {
      setLoading(true);
      setError("");

      if (!firstName.trim() || !lastName.trim()) {
        setError("First name and last name are required");
        return;
      }

      await dispatch(
        updateUserProfileThunk({
          firstName: firstName.trim(),
          lastName: lastName.trim(),
        }),
      ).unwrap();

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
          <Button variant="outline" onClick={handleClose}>
            Cancel
          </Button>
          <Button
            className="w-full max-w-37.5"
            onClick={handleUpdateName}
            disabled={loading || !firstName || !lastName || !isChanged}
          >
            {loading ? <FaSpinner className="animate-spin" /> : "Submit"}
          </Button>
        </div>
      </div>
    </Modal>
  );
}
