import { cn } from '@/lib/utils';
import { Link, useLocation } from 'react-router-dom';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar/sidebar"
import { SidebarMenuItems } from '../constants';


export function AppSidebar() {

  const location = useLocation()
  const currentPath = location.pathname

  return (
    <Sidebar className="bg-white">
      <SidebarContent>
        <SidebarGroup>
          <h1 className="text-3xl font-bold"><i>Shipping Plus</i></h1>
          <SidebarGroupContent>
            <SidebarMenu className="mt-8">
              {SidebarMenuItems.map((item) => {
                const isActive = currentPath === item.url
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      asChild
                      size={"lg"}
                      className={cn(isActive && "bg-blue-100")}
                    >
                      <Link to={item.url} className="flex items-center gap-3">
                        <item.icon
                          strokeWidth={2}
                          className={cn(isActive ? "text-indigo-600" : "text-gray-600")}
                        />
                        <span className={`leading-7 font-semibold text-gray-600`}>
                          {item.title}
                        </span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                )
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
