import { AsideBar } from "@/components/features/tenant/dashboard/AsideBar";
import { DashboardContentWrap } from "@/components/features/tenant/dashboard/DashboardContentWrap";
import { ToggleDashboardNav } from "@/components/features/tenant/dashboard/ToggleDashboardNav";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className={"bg-[#EBEBEB] min-h-screen flex font-galano text-[#262931]"}
    >
      <AsideBar />
      <DashboardContentWrap>
        <ToggleDashboardNav />
        {children}
      </DashboardContentWrap>
    </div>
  );
}
