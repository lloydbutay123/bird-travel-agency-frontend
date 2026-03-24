import SectionHeader from "../ui/SectionHeader";
import AccountInfoItem from "./AccountInfoItem";
import { RootState } from "@/redux/store";
import { useState } from "react";
import EditPasswordModal from "./modals/editPasswordModal";
import EditPhoneModal from "./modals/editPhoneModal";
import { useSelector } from "react-redux";
import EditEmailModal from "./modals/EditEmailModal";
import EditNameModal from "./modals/EditNameModal";
import VerifyEmailOtpModal from "./modals/VerifyEmailOtpModal";
import EditDateOfBirthModal from "./modals/EditDateOfBirthModal";
import EditAddressModal from "./modals/EditAddressModal";

export default function AccountDetailsSection() {
  const { user } = useSelector((state: RootState) => state.auth);

  const [editPasswordModal, setEditPasswordModal] = useState(false);
  const [editNameModal, setEditNameModal] = useState(false);
  const [editPhoneModal, setEditPhoneModal] = useState(false);
  const [editEmailModal, setEditEmailModal] = useState(false);
  const [editDateOfBirth, setEditDateOfBirth] = useState(false);
  const [editAddress, setEditAddress] = useState(false);

  const [verifyOtpModal, setVerifyOtpModal] = useState(false);
  const [pendingEmail, setPendingEmail] = useState("");

  const fullname = `${user?.firstName} ${user?.lastName}`;
  const email = user?.email;
  const phone = user?.phone;
  const dateOfBirth = user?.dateOfBirth;
  const address = user?.address
    ? `${user.address.barangay}, ${user.address.city} ${user.address.zipCode}, ${user.address.province}, ${user.address.region}`
    : "";

  const formattedDb = dateOfBirth
    ? new Date(dateOfBirth).toLocaleDateString("en-us", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "";

  return (
    <div className="flex flex-col gap-4">
      <SectionHeader title="Account" />
      <div className="card flex flex-col gap-8 rounded-2xl px-6 py-8">
        <AccountInfoItem
          label="Name"
          value={fullname}
          onEdit={() => setEditNameModal(true)}
        />
        <AccountInfoItem
          label="Email"
          value={email || ""}
          onEdit={() => setEditEmailModal(true)}
        />
        <AccountInfoItem
          label="Password"
          value="************"
          onEdit={() => setEditPasswordModal(true)}
        />
        <AccountInfoItem
          label="Phone number"
          value={phone || ""}
          onEdit={() => setEditPhoneModal(true)}
        />
        <AccountInfoItem
          label="Address"
          value={address}
          onEdit={() => setEditAddress(true)}
        />
        <AccountInfoItem
          label="Date of birth"
          value={formattedDb}
          onEdit={() => setEditDateOfBirth(true)}
        />
      </div>

      <EditPasswordModal
        onClose={() => setEditPasswordModal(false)}
        isOpen={editPasswordModal}
      />

      <EditNameModal
        onClose={() => setEditNameModal(false)}
        isOpen={editNameModal}
      />

      <EditPhoneModal
        onClose={() => setEditPhoneModal(false)}
        isOpen={editPhoneModal}
      />

      <EditEmailModal
        onClose={() => setEditEmailModal(false)}
        isOpen={editEmailModal}
        onOtpRequired={(email) => {
          setPendingEmail(email);
          setVerifyOtpModal(true);
        }}
      />

      <EditDateOfBirthModal
        onClose={() => setEditDateOfBirth(false)}
        isOpen={editDateOfBirth}
      />

      <EditAddressModal
        onClose={() => setEditAddress(false)}
        isOpen={editAddress}
      />

      <VerifyEmailOtpModal
        onClose={() => setVerifyOtpModal(false)}
        isOpen={verifyOtpModal}
        email={pendingEmail}
      />
    </div>
  );
}
