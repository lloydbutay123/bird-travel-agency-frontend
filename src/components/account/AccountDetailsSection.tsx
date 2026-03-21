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

export default function AccountDetailsSection() {
  const { user } = useSelector((state: RootState) => state.auth);

  const [editPasswordModal, setEditPasswordModal] = useState(false);
  const [editNameModal, setEditNameModal] = useState(false);
  const [editPhoneModal, setEditPhoneModal] = useState(false);
  const [editEmailModal, setEditEmailModal] = useState(false);

  const [verifyOtpModal, setVerifyOtpModal] = useState(false);
  const [pendingEmail, setPendingEmail] = useState("");

  const fullname = `${user?.firstName} ${user?.lastName}`;
  const email = `${user?.email}`;
  const phone = `${user?.phone}`;

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
          value={email}
          onEdit={() => setEditEmailModal(true)}
        />
        <AccountInfoItem
          label="Password"
          value="************"
          onEdit={() => setEditPasswordModal(true)}
        />
        <AccountInfoItem
          label="Phone number"
          value={phone}
          onEdit={() => setEditPhoneModal(true)}
        />
        <AccountInfoItem
          label="Address"
          value="St 32 main downtown, Los Angeles, California, USA"
          onEdit={() => {}}
        />
        <AccountInfoItem
          label="Date of birth"
          value="01-01-1992"
          onEdit={() => {}}
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
        currentEmail={user?.email || ""}
        onOtpRequired={(email) => {
          setPendingEmail(email);
          setVerifyOtpModal(true);
        }}
      />

      <VerifyEmailOtpModal
        onClose={() => setVerifyOtpModal(false)}
        isOpen={verifyOtpModal}
        email={pendingEmail}
      />
    </div>
  );
}
