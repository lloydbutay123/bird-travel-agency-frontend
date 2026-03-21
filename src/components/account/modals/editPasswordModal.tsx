import Button from "@/components/ui/Button";
import Modal from "@/components/ui/Modal";
import SectionHeader from "@/components/ui/SectionHeader";
import TextField from "@/components/ui/TextField";
import { API_URL } from "@/lib/api";
import { logout } from "@/redux/slices/authSlice";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaSpinner } from "react-icons/fa";
import { useDispatch } from "react-redux";

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

  const dispatch = useDispatch();
  const router = useRouter();

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

      if (password !== confirmPassword) {
        setError("Passwords do not match");
        return;
      }

      const res = await fetch(`${API_URL}/api/v1/auth/change-password`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          currentPassword,
          password,
          confirmPassword,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Change password failed");
        return;
      }

      onClose();

      setCurrentPassword("");
      setPassword("");
      setConfirmPassword("");

      dispatch(logout());

      router.push("/auth/login");
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
          <Button variant="outline" onClick={onClose}>
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
