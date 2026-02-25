import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function Overview() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Visual tools</h1>
        <p className="text-muted-foreground mt-1">
          Decision support for Italy Deal #1 — regions, budget, and compliance in one place.
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Region scorecard</CardTitle>
            <CardDescription>Compare 8 Italian regions: €/m², STR demand, permits, risks. Sort, filter, expand details, export CSV.</CardDescription>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Budget calculator</CardTitle>
            <CardDescription>Enter purchase + reno; get total EUR/CAD. Optional ADR and occupancy for a simple gross STR yield.</CardDescription>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Compliance checklist</CardTitle>
            <CardDescription>Italy (pre-launch) and Canada (ongoing). Check off as you go; progress saved in this browser.</CardDescription>
          </CardHeader>
        </Card>
      </div>
      <p className="text-sm text-muted-foreground">
        Data from research shortlist (Feb 2026). See <code className="rounded bg-muted px-1 py-0.5">docs/00-Visual-Tools.md</code> and{" "}
        <code className="rounded bg-muted px-1 py-0.5">docs/00-Decision-Interface.md</code> for full context.
      </p>
    </div>
  )
}
