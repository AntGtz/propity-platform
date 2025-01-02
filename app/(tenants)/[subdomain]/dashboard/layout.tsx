import { AsideBar } from "@/components/features/tenant/dashboard/AsideBar";

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
          "bg-white flex-grow shadow-xl my-4 mr-8 rounded-lg border border-[#26293133]"
        }
      >
        {children}
      </main>
    </div>
  );
}
