import { LayoutDashboard, MessageSquareDiff, Package, Rows3, Settings, ShoppingCart, SquareUser } from "lucide-react"

// Sidebar menu items
export const SidebarMenuItems = [
    {
      title: "Dashboard",
      url: "/",
      icon: LayoutDashboard,
    },
    {
      title: "Product",
      url: "/product",
      icon: Package,
    },
    {
      title: "Orders",
      url: "/orders",
      icon: Rows3,
    },
    {
      title: "Customer",
      url: "/customer",
      icon: SquareUser,
    },
    {
      title: "Review",
      url: "/review",
      icon: MessageSquareDiff,
    },
    {
      title: "Checkout",
      url: "/checkout",
      icon: ShoppingCart,
    },
    {
      title: "Settings",
      url: "/settings",
      icon: Settings,
    },
  ]