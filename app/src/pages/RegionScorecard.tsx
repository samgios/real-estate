import React, { useMemo, useState } from "react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { REGIONS_DATA, type RegionRow } from "@/data/regions"
import { cn } from "@/lib/utils"

type SortKey = keyof RegionRow

function exportCsv(rows: RegionRow[]) {
  const headers = ["Rank", "Region", "€/m²", "€500k?", "STR demand", "Value-add", "Permit ease", "Main risk", "Best for", "Key towns"]
  const csv = [headers.join(","), ...rows.map((r) => [r.rank, r.region, r.eurSqm, r.feasible500, r.strDemand, r.valueAdd, r.permitEase, r.risk, r.bestFor, r.keyTowns].map((c) => `"${String(c).replace(/"/g, '""')}"`).join(","))].join("\n")
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" })
  const a = document.createElement("a")
  a.href = URL.createObjectURL(blob)
  a.download = "italy-region-scorecard.csv"
  a.click()
  URL.revokeObjectURL(a.href)
}

const STR_ALL = "all"
const PREFAB_ALL = "all"
const PERMIT_ANY = "any"

export function RegionScorecard() {
  const [strFilter, setStrFilter] = useState(STR_ALL)
  const [prefabFilter, setPrefabFilter] = useState(PREFAB_ALL)
  const [permitFilter, setPermitFilter] = useState(PERMIT_ANY)
  const [sortKey, setSortKey] = useState<SortKey>("rank")
  const [sortDir, setSortDir] = useState(1)
  const [expandedRank, setExpandedRank] = useState<number | null>(null)

  const filtered = useMemo(() => {
    return REGIONS_DATA.filter((r) => {
      if (strFilter !== STR_ALL && r.strDemand !== strFilter) return false
      if (prefabFilter !== PREFAB_ALL && r._prefab !== prefabFilter) return false
      if (permitFilter === "high" && r.permitOrder < 3) return false
      if (permitFilter === "moderate" && r.permitOrder < 2) return false
      return true
    })
  }, [strFilter, prefabFilter, permitFilter])

  const sorted = useMemo(() => {
    const key = sortKey === "eurSqm" ? "eurSqmNum" : sortKey
    return [...filtered].sort((a, b) => {
      const va = a[key as keyof RegionRow]
      const vb = b[key as keyof RegionRow]
      if (typeof va === "number" && typeof vb === "number") return (va - vb) * sortDir
      return String(va).localeCompare(String(vb)) * sortDir
    })
  }, [filtered, sortKey, sortDir])

  const handleSort = (key: SortKey) => {
    if (sortKey === key) setSortDir((d) => -d)
    else {
      setSortKey(key)
      setSortDir(key === "rank" ? 1 : -1)
    }
  }

  const resetFilters = () => {
    setStrFilter(STR_ALL)
    setPrefabFilter(PREFAB_ALL)
    setPermitFilter(PERMIT_ANY)
  }

  return (
    <div className="space-y-4">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Region scorecard</h1>
        <p className="text-muted-foreground text-sm mt-1">
          Click a row to expand. Sort by column header. Filter and export CSV.
        </p>
      </div>

      <Card>
        <CardHeader className="pb-3">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-3">
              <Select value={strFilter} onValueChange={setStrFilter}>
                <SelectTrigger className="w-[140px]">
                  <SelectValue placeholder="STR demand" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value={STR_ALL}>All</SelectItem>
                  <SelectItem value="Very high">Very high</SelectItem>
                  <SelectItem value="High">High</SelectItem>
                  <SelectItem value="Moderate">Moderate</SelectItem>
                  <SelectItem value="Emerging">Emerging</SelectItem>
                </SelectContent>
              </Select>
              <Select value={prefabFilter} onValueChange={setPrefabFilter}>
                <SelectTrigger className="w-[130px]">
                  <SelectValue placeholder="Prefab" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value={PREFAB_ALL}>All</SelectItem>
                  <SelectItem value="yes">Yes</SelectItem>
                  <SelectItem value="no">No</SelectItem>
                </SelectContent>
              </Select>
              <Select value={permitFilter} onValueChange={setPermitFilter}>
                <SelectTrigger className="w-[160px]">
                  <SelectValue placeholder="Permit ease" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value={PERMIT_ANY}>Any</SelectItem>
                  <SelectItem value="high">High only</SelectItem>
                  <SelectItem value="moderate">Moderate+</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline" size="sm" onClick={resetFilters}>Reset</Button>
              <Button size="sm" onClick={() => exportCsv(sorted)}>Export CSV</Button>
            </div>
            <span className="text-sm text-muted-foreground">
              Showing {sorted.length} of {REGIONS_DATA.length} regions
            </span>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b bg-muted/50">
                  {(["rank", "region", "eurSqm", "feasible500", "strDemand", "valueAdd", "permitEase", "risk", "bestFor"] as const).map((key) => (
                    <th
                      key={key}
                      className="cursor-pointer px-4 py-2.5 text-left font-medium hover:bg-muted"
                      onClick={() => handleSort(key)}
                    >
                      {key === "eurSqm" ? "€/m²" : key === "feasible500" ? "€500k?" : key === "strDemand" ? "STR demand" : key === "permitEase" ? "Permit" : key.charAt(0).toUpperCase() + key.slice(1)}
                      {sortKey === key && (sortDir === 1 ? " ▲" : " ▼")}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {sorted.map((r) => (
                  <React.Fragment key={r.rank}>
                    <tr
                      key={r.rank}
                      className={cn(
                        "border-b cursor-pointer hover:bg-muted/50",
                        expandedRank === r.rank && "bg-muted/50"
                      )}
                      onClick={() => setExpandedRank(expandedRank === r.rank ? null : r.rank)}
                    >
                      <td className="px-4 py-2 font-medium">{r.rank}</td>
                      <td className="px-4 py-2 font-medium">{r.region}</td>
                      <td className="px-4 py-2">{r.eurSqm}</td>
                      <td className="px-4 py-2"><span className="rounded bg-green-100 text-green-800 px-1.5 py-0.5 text-xs">{r.feasible500}</span></td>
                      <td className="px-4 py-2"><span className={cn("rounded px-1.5 py-0.5 text-xs", r.strDemand === "Very high" && "bg-green-100 text-green-800", r.strDemand === "High" && "bg-blue-100 text-blue-800", r.strDemand === "Moderate" && "bg-yellow-100 text-yellow-800", r.strDemand === "Emerging" && "bg-gray-100 text-gray-700")}>{r.strDemand}</span></td>
                      <td className="px-4 py-2">{r.valueAdd}</td>
                      <td className="px-4 py-2"><span className={cn("rounded px-1.5 py-0.5 text-xs", r.permitEase === "High" && "bg-green-100 text-green-800", r.permitEase === "Moderate" && "bg-yellow-100 text-yellow-800", r.permitEase === "Low" && "bg-red-100 text-red-800", r.permitEase === "Variable" && "bg-gray-100 text-gray-700")}>{r.permitEase}</span></td>
                      <td className="px-4 py-2">{r.risk}</td>
                      <td className="px-4 py-2">{r.bestFor}</td>
                    </tr>
                    {expandedRank === r.rank && (
                      <tr key={`${r.rank}-detail`} className="border-b bg-muted/30">
                        <td colSpan={9} className="px-4 py-3 text-muted-foreground text-sm">
                          <div className="grid gap-2 md:grid-cols-2">
                            <p><strong className="text-foreground">Key towns:</strong> {r.keyTowns}</p>
                            <p><strong className="text-foreground">Best for:</strong> {r.bestFor}</p>
                            <p className="md:col-span-2"><strong className="text-foreground">Financials:</strong> {r.financials}</p>
                            <p><strong className="text-foreground">Pros:</strong> {r.pros}</p>
                            <p><strong className="text-foreground">Cons:</strong> {r.cons}</p>
                          </div>
                        </td>
                      </tr>
                    )}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
