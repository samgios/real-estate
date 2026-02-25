import { LayoutDashboard, MapPin, Calculator, CheckSquare } from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import type { PageId } from "@/App"

const nav: { id: PageId; label: string; icon: React.ElementType }[] = [
  { id: "overview", label: "Overview", icon: LayoutDashboard },
  { id: "regions", label: "Region scorecard", icon: MapPin },
  { id: "budget", label: "Budget calculator", icon: Calculator },
  { id: "compliance", label: "Compliance checklist", icon: CheckSquare },
]

export function AppSidebar({
  page,
  onNavigate,
}: {
  page: PageId
  onNavigate: (id: PageId) => void
}) {
  return (
    <Sidebar>
      <SidebarHeader className="border-b border-sidebar-border px-4 py-3">
        <span className="font-semibold text-sidebar-foreground">Italy Deal #1</span>
        <span className="block text-xs text-muted-foreground">Decision tools</span>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Tools</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {nav.map(({ id, label, icon: Icon }) => (
                <SidebarMenuItem key={id}>
                  <SidebarMenuButton
                    isActive={page === id}
                    onClick={() => onNavigate(id)}
                  >
                    <Icon className="size-4" />
                    <span>{label}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
