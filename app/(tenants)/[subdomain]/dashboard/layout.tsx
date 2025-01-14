import { AsideBar } from "@/components/features/tenant/dashboard/AsideBar";
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
      <main
        className={
          "bg-white flex-grow shadow-xl my-4 w-9/12 mr-4 rounded-lg border border-[#26293133] p-4 flex flex-col"
        }
      >
        <ToggleDashboardNav />
        {children}
      </main>
    </div>
  );
}
