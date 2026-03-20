import Divider from "../ui/Divider";
import Button from "../ui/Button";

type TabKey = "account" | "history" | "payment";

const accountTabs: { label: string; value: TabKey }[] = [
  {
    label: "Account",
    value: "account",
  },
  {
    label: "History",
    value: "history",
  },
  {
    label: "Payment methods",
    value: "payment",
  },
];

type AccountTabsProps = {
  activeTab: TabKey;
  onTabChange: (tab: TabKey) => void;
};

export default function AccountTabs({
  activeTab,
  onTabChange,
}: AccountTabsProps) {
  return (
    <div className="card flex items-center md:gap-6 md:px-6 py-4 h-20 rounded-xl">
      {accountTabs.map((tab, index) => (
        <div key={index} className="flex items-center h-full gap-6 w-full">
          <Button
            variant="ghost"
            key={index}
            className={`text-[16px] font-semibold w-full max-w-[362.67px] justify-start ${
              activeTab === tab.value ? "text-[#FF8682]" : ""
            }`}
            onClick={() => onTabChange(tab.value)}
          >
            {tab.label}
          </Button>
          {index != accountTabs.length - 1 && (
            <Divider orientation="vertical" />
          )}
        </div>
      ))}
    </div>
  );
}
