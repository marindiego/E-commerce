import { DashboardSidebar } from "@/components/DashboardSidebar";

export default function UserDashboardLayout({ children }: { children: React.ReactNode }) {
    return (
    <section className="flex h-[50rem] bg-slate-300 text-gray-900">  
        <DashboardSidebar />
        {children}
    </section>);
}