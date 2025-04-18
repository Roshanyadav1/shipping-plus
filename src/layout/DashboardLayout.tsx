import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "./components/AppSidebar";
import AppHeader from "./components/AppHeader";


export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="bg-gray-100 w-full">
        <AppHeader />
        {children}
      </main>
    </SidebarProvider>
  )
}