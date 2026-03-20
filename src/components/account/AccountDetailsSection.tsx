import { useAppSelector } from "@/redux/hooks";
import SectionHeader from "../ui/SectionHeader";
import AccountInfoItem from "./AccountInfoItem";
import { RootState } from "@/redux/store";
import { useState } from "react";
import EditPasswordModal from "./modals/editPasswordModal";

export default function AccountDetailsSection() {
  const { user } = useAppSelector((state: RootState) => state.auth);

  const [editPasswordModal, setEditPasswordModal] = useState(false);

  const fullname = `${user?.firstName} ${user?.lastName}`;
  const email = `${user?.email}`;
  const phone = `${user?.phone}`;

  return (
    <div className="flex flex-col gap-4">
      <SectionHeader title="Account" />
      <div className="card flex flex-col gap-8 rounded-2xl px-6 py-8">
        <AccountInfoItem label="Name" value={fullname} onEdit={() => {}} />
        <AccountInfoItem label="Email" value={email} onEdit={() => {}} />
        <AccountInfoItem
          label="Password"
          value="************"
          onEdit={() => setEditPasswordModal(true)}
        />
        <AccountInfoItem label="Phone number" value={phone} onEdit={() => {}} />
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
    </div>
  );
}
