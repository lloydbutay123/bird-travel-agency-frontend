import Button from "@/components/ui/Button";
import Modal from "@/components/ui/Modal";
import SectionHeader from "@/components/ui/SectionHeader";
import TextField from "@/components/ui/TextField";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { updateUserProfileThunk } from "@/redux/slices/authSlice";
import { RootState } from "@/redux/store";
import { useState } from "react";
import { FaSpinner } from "react-icons/fa";

type EditAddressModalProps = {
  onClose: () => void;
  isOpen: boolean;
};

export default function EditAddressModal({
  onClose,
  isOpen,
}: EditAddressModalProps) {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state: RootState) => state.auth);

  const [region, setRegion] = useState(user?.address?.region || "");
  const [province, setProvince] = useState(user?.address?.province || "");
  const [city, setCity] = useState(user?.address?.city || "");
  const [barangay, setBarangay] = useState(user?.address?.barangay || "");
  const [zipCode, setZipCode] = useState(user?.address?.zipCode || "");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const resetForm = () => {
    setRegion(user?.address?.region || "");
    setProvince(user?.address?.province || "");
    setCity(user?.address?.city || "");
    setBarangay(user?.address?.barangay || "");
    setZipCode(user?.address?.zipCode || "");

    setError("");
  };

  const isChanged =
    region !== user?.address?.region ||
    province !== user.address?.province ||
    city !== user.address?.city ||
    barangay !== user.address?.barangay ||
    zipCode !== user.address?.zipCode;

  const handleClose = () => {
    resetForm();
    onClose();
  };

  const handleUpdateAddress = async () => {
    try {
      setLoading(true);
      setError("");

      await dispatch(
        updateUserProfileThunk({
          address: {
            region: region.trim(),
            province: province.trim(),
            city: city.trim(),
            barangay: barangay.trim(),
            zipCode: zipCode.trim(),
          },
        }),
      );

      onClose();
    } catch (error) {
      setError("Something went wrong. Please try agin.");
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal onClose={handleClose} isOpen={isOpen}>
      <div className="flex flex-col gap-10">
        <SectionHeader
          title="Update Address"
          subtitle="Edit your location details for bookings and billing."
        />
        <div className="flex flex-col gap-6">
          <TextField
            label="Region"
            name="region"
            type="text"
            value={region}
            placeholder="Enter region"
            onChange={(e) => setRegion(e.target.value)}
          />
          <TextField
            label="Province"
            name="province"
            type="text"
            value={province}
            placeholder="Enter province"
            onChange={(e) => setProvince(e.target.value)}
          />
          <TextField
            label="City"
            name="city"
            type="text"
            value={city}
            placeholder="Enter city"
            onChange={(e) => setCity(e.target.value)}
          />
          <TextField
            label="Barangay"
            name="barangay"
            type="text"
            value={barangay}
            placeholder="Enter barangay"
            onChange={(e) => setBarangay(e.target.value)}
          />
          <TextField
            label="Zip code"
            name="zipCode"
            type="text"
            value={zipCode}
            placeholder="Enter zip code"
            onChange={(e) => setZipCode(e.target.value)}
          />
        </div>
        {error && <p className="text-[16px] text-red-500">{error}</p>}
        <div className="flex gap-2 justify-end">
          <Button variant="outline" onClick={handleClose}>
            Cancel
          </Button>
          <Button
            className="w-full max-w-37.5"
            onClick={handleUpdateAddress}
            disabled={
              loading ||
              !region ||
              !province ||
              !city ||
              !barangay ||
              !zipCode ||
              !isChanged
            }
          >
            {loading ? <FaSpinner className="animate-spin" /> : "Submit"}
          </Button>
        </div>
      </div>
    </Modal>
  );
}
