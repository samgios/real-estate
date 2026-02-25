import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"

const STORAGE_KEY = "italy-deal-compliance"

const ITALY_ITEMS = [
  "Codice Fiscale (all directors/shareholders)",
  "Reciprocity confirmed for target comune with notary",
  "S.r.l. incorporated (Atto Costitutivo, Statuto, Registro delle Imprese)",
  "Corporate bank account open (or nominee/proxy in place)",
  "Geometra: Conformità Urbanistica e Catastale verified",
  "Purchase: compromesso transcribed, rogito signed, taxes paid",
  "Building/reno permits (CILA / SCIA / PdC) in place",
  "Construction: CAR + RC Postuma (if heavy reno/new build)",
  "Regional CIR (Puglia: DMS Puglia) obtained",
  "CIN obtained (BDSR portal) and displayed",
  "RCT insurance (mandatory for STR; €500k–1.5M typical)",
  "STR-specific policy (guest damage, loss of income) if required",
  "CIA/SCIA for entrepreneurial activity (SUAP)",
  "Alloggiati Web access (guest reporting)",
  "SPOT (Puglia) or regional monthly reporting set up",
  "Tourist tax registration (comune)",
  "Safety: extinguishers, gas/CO detectors installed and certified",
]

const CANADA_ITEMS = [
  "T1134 (foreign affiliate) filed if S.r.l. held — deadline 10 months after year-end",
  "T1135 filed if other specified foreign property >$100k CAD",
  "Quebec TP-1079.8.BE-V if applicable (from 2025)",
  "ACB tracked: BoC exchange rate on date of each payment (purchase + reno)",
  "Invoices and payment receipts kept for all reno spend",
  "Canadian tax advisor briefed on structure (FAPI, RTF, exit)",
]

function loadState(): Record<string, boolean> {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : {}
  } catch {
    return {}
  }
}

function saveState(state: Record<string, boolean>) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
}

export function ComplianceChecklist() {
  const [state, setState] = useState<Record<string, boolean>>({})

  useEffect(() => {
    setState(loadState())
  }, [])

  const toggle = (key: string) => {
    const next = { ...state, [key]: !state[key] }
    setState(next)
    saveState(next)
  }

  const clearAll = () => {
    if (window.confirm("Clear all checkboxes?")) {
      setState({})
      saveState({})
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Compliance checklist</h1>
        <p className="text-muted-foreground text-sm mt-1">
          Check off as you go. Progress is saved in this browser (localStorage).
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle>Italy — pre-launch</CardTitle>
            <CardDescription>Before STR launch</CardDescription>
          </CardHeader>
          <CardContent className="space-y-1">
            {ITALY_ITEMS.map((text, i) => {
              const key = `it${i}`
              const checked = state[key]
              return (
                <Label
                  key={key}
                  htmlFor={key}
                  className={cn(
                    "flex items-start gap-2 cursor-pointer rounded-md px-2 py-1.5 hover:bg-muted/50",
                    checked && "text-muted-foreground"
                  )}
                >
                  <input
                    id={key}
                    type="checkbox"
                    checked={!!checked}
                    onChange={() => toggle(key)}
                    className="mt-1 rounded border-input"
                  />
                  <span className={checked ? "line-through" : undefined}>{text}</span>
                </Label>
              )
            })}
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle>Canada — ongoing</CardTitle>
            <CardDescription>Reporting and records</CardDescription>
          </CardHeader>
          <CardContent className="space-y-1">
            {CANADA_ITEMS.map((text, i) => {
              const key = `ca${i}`
              const checked = state[key]
              return (
                <Label
                  key={key}
                  htmlFor={key}
                  className={cn(
                    "flex items-start gap-2 cursor-pointer rounded-md px-2 py-1.5 hover:bg-muted/50",
                    checked && "text-muted-foreground"
                  )}
                >
                  <input
                    id={key}
                    type="checkbox"
                    checked={!!checked}
                    onChange={() => toggle(key)}
                    className="mt-1 rounded border-input"
                  />
                  <span className={checked ? "line-through" : undefined}>{text}</span>
                </Label>
              )
            })}
          </CardContent>
        </Card>
      </div>

      <Button variant="outline" onClick={clearAll}>Clear all</Button>
    </div>
  )
}
