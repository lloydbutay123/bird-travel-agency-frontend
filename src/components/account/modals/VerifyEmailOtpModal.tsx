import { verifyEmailChange } from "@/apis/User";
import Button from "@/components/ui/Button";
import Modal from "@/components/ui/Modal";
import SectionHeader from "@/components/ui/SectionHeader";
import TextField from "@/components/ui/TextField";
import { updateUser } from "@/redux/slices/authSlice";
import { useState } from "react";
import { FaSpinner } from "react-icons/fa";
import { useDispatch } from "react-redux";

type VerifyEmailOtpModalProps = {
  onClose: () => void;
  isOpen: boolean;
  email: string;
};

export default function VerifyEmailOtpModal({
  onClose,
  isOpen,
  email,
}: VerifyEmailOtpModalProps) {
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const dispatch = useDispatch();

  const handleVerifyOtp = async () => {
    try {
      setLoading(true);
      setError("");

      await verifyEmailChange({
        email,
        otp,
      });
      dispatch(
        updateUser({
          email,
        }),
      );
      onClose();
    } catch (error: unknown) {
      setError(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal onClose={onClose} isOpen={isOpen}>
      <div className="flex flex-col gap-10">
        <SectionHeader
          title="Verify new email"
          subtitle={`Enter the OTP sent to ${email}`}
        />
        <div className="flex flex-col gap-6">
          <TextField
            label="Enter OTP"
            name="otp"
            type="text"
            value={otp}
            placeholder="Enter OTP"
            maxLength={6}
            onChange={(e) => setOtp(e.target.value)}
          />
        </div>
        {error && <p className="text-[16px] text-red-500">{error}</p>}
        <div className="flex gap-2 justify-end">
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button
            className="w-full max-w-37.5"
            onClick={handleVerifyOtp}
            disabled={loading || !otp}
          >
            {loading ? <FaSpinner className="animate-spin" /> : "Submit"}
          </Button>
        </div>
      </div>
    </Modal>
  );
}
