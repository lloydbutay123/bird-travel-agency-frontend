import Button from "@/components/ui/Button";
import Modal from "@/components/ui/Modal";
import SectionHeader from "@/components/ui/SectionHeader";
import TextField from "@/components/ui/TextField";
import { useAppDispatch } from "@/redux/hooks";
import { changePasswordThunk, logoutThunk } from "@/redux/slices/authSlice";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaSpinner } from "react-icons/fa";

type EditPasswordModalProps = {
  onClose: () => void;
  isOpen: boolean;
};
export default function EditPasswordModal({
  onClose,
  isOpen,
}: EditPasswordModalProps) {
  const [currentPassword, setCurrentPassword] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const dispatch = useAppDispatch();
  const router = useRouter();

  const resetForm = () => {
    setCurrentPassword("");
    setPassword("");
    setConfirmPassword("");
    setError("");
  };

  const handleClose = () => {
    resetForm();
    onClose();
  };

  const handleChangePassword = async () => {
    try {
      setLoading(true);
      setError("");

      if (password !== confirmPassword) {
        setError("Passwords do not match");
        return;
      }
      if (password.length < 8) {
        setError("Password must be at least 8 characters");
        return;
      }

      await dispatch(
        changePasswordThunk({
          currentPassword,
          password,
          confirmPassword,
        }),
      ).unwrap();

      await dispatch(logoutThunk()).unwrap();

      onClose();
      router.replace("/auth/login");
    } catch (error: unknown) {
      setError(
        typeof error === "string"
          ? error
          : error instanceof Error
            ? error.message
            : "Something went wrong. Please try again",
      );
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <Modal onClose={handleClose} isOpen={isOpen}>
      <div className="flex flex-col gap-10">
        <SectionHeader
          title="Change password"
          subtitle="Update your password to keep your account secure."
        />
        {/* <Divider /> */}
        <div className="flex flex-col gap-6">
          <TextField
            label="Current password"
            name="currentPassword"
            type="password"
            value={currentPassword}
            placeholder="Input current password"
            onChange={(e) => setCurrentPassword(e.target.value)}
          />
          <TextField
            label="New password"
            name="password"
            type="password"
            value={password}
            placeholder="Input new password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <TextField
            label="Confirm new password"
            name="confirmPassword"
            type="password"
            value={confirmPassword}
            placeholder="Confirm new password"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        {error && <p className="text-[16px] text-red-500">{error}</p>}
        <div className="flex gap-2 justify-end">
          <Button variant="outline" onClick={handleClose}>
            Cancel
          </Button>
          <Button
            className="w-full max-w-37.5"
            onClick={handleChangePassword}
            disabled={
              loading || !currentPassword || !password || !confirmPassword
            }
          >
            {loading ? <FaSpinner className="animate-spin" /> : "Submit"}
          </Button>
        </div>
      </div>
    </Modal>
  );
}
