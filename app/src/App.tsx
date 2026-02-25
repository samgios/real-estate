import { useState } from "react"
import { TooltipProvider } from "@/components/ui/tooltip"
import {
  SidebarProvider,
  SidebarInset,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/AppSidebar"
import { Overview } from "@/pages/Overview"
import { RegionScorecard } from "@/pages/RegionScorecard"
import { BudgetCalculator } from "@/pages/BudgetCalculator"
import { ComplianceChecklist } from "@/pages/ComplianceChecklist"

export type PageId = "overview" | "regions" | "budget" | "compliance"

function App() {
  const [page, setPage] = useState<PageId>("overview")

  return (
    <TooltipProvider>
      <SidebarProvider>
        <AppSidebar page={page} onNavigate={setPage} />
        <SidebarInset>
          <header className="flex h-12 shrink-0 items-center gap-2 border-b px-4">
            <SidebarTrigger className="-ml-1" />
            <span className="text-sm font-medium text-muted-foreground">
              {page === "overview" && "Overview"}
              {page === "regions" && "Region scorecard"}
              {page === "budget" && "Budget calculator"}
              {page === "compliance" && "Compliance checklist"}
            </span>
          </header>
          <main className="flex-1 overflow-auto p-6">
            {page === "overview" && <Overview />}
            {page === "regions" && <RegionScorecard />}
            {page === "budget" && <BudgetCalculator />}
            {page === "compliance" && <ComplianceChecklist />}
          </main>
        </SidebarInset>
      </SidebarProvider>
    </TooltipProvider>
  )
}

export default App
