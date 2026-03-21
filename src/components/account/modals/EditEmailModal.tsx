import Button from "@/components/ui/Button";
import Modal from "@/components/ui/Modal";
import SectionHeader from "@/components/ui/SectionHeader";
import TextField from "@/components/ui/TextField";
import { API_URL } from "@/lib/api";
import { RootState } from "@/redux/store";
import { useState } from "react";
import { FaSpinner } from "react-icons/fa";
import { useSelector } from "react-redux";

export default function EditEmailModal({
  onClose,
  isOpen,
  onOtpRequired,
}: {
  onClose: () => void;
  isOpen: boolean;
  onOtpRequired: (email: string) => void;
}) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { user } = useSelector((state: RootState) => state.auth);

  const isChanged = email.trim() !== user?.email;

  const handleUpdateEmail = async () => {
    try {
      setLoading(true);
      setError("");

      const submittedEmail = email.trim();

      const res = await fetch(`${API_URL}/api/v1/users/change-email`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({ email: submittedEmail, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Update email failed");
        return;
      }

      onClose();
      onOtpRequired(submittedEmail);
    } catch (error) {
      setError("Something went wrong. Please try again.");
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setEmail("");
    setPassword("");
    setError("");
    setLoading(false);
  };

  const handleClose = () => {
    resetForm();
    onClose();
  };

  return (
    <Modal onClose={handleClose} isOpen={isOpen}>
      <div className="flex flex-col gap-10">
        <SectionHeader
          title="Update email"
          subtitle="Enter your new email and current password. We’ll send a verification code to confirm the change."
        />
        <div className="flex flex-col gap-6">
          <TextField
            label="Enter new email"
            name="email"
            type="email"
            value={email}
            placeholder="Enter your new email"
            inputMode="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            label="Password"
            name="password"
            type="password"
            value={password}
            placeholder="Enter your password"
            inputMode="text"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {error && <p className="text-[16px] text-red-500">{error}</p>}
        <div className="flex gap-2 justify-end">
          <Button variant="outline" onClick={handleClose}>
            Cancel
          </Button>
          <Button
            className="w-full max-w-37.5"
            onClick={handleUpdateEmail}
            disabled={loading || !email || !password || !isChanged}
          >
            {loading ? <FaSpinner className="animate-spin" /> : "Send code"}
          </Button>
        </div>
      </div>
    </Modal>
  );
}
