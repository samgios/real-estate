import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

function formatEur(n: number) {
  return new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR", maximumFractionDigits: 0 }).format(n)
}
function formatCad(n: number) {
  return new Intl.NumberFormat("en-CA", { style: "currency", currency: "CAD", maximumFractionDigits: 0 }).format(n)
}

export function BudgetCalculator() {
  const [purchase, setPurchase] = useState(300000)
  const [reno, setReno] = useState(180000)
  const [txPct, setTxPct] = useState(17)
  const [fx, setFx] = useState(1.5)
  const [adr, setAdr] = useState(150)
  const [occ, setOcc] = useState(120)

  const tx = purchase * (txPct / 100)
  const totalEur = purchase + reno + tx
  const totalCad = totalEur * fx
  const grossRev = adr * occ
  const yieldPct = totalEur > 0 ? (grossRev / totalEur) * 100 : 0

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Budget calculator</h1>
        <p className="text-muted-foreground text-sm mt-1">
          Enter purchase and reno; get total EUR and CAD. Optional: ADR and occupancy for a simple gross STR yield.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Inputs</CardTitle>
            <CardDescription>Purchase, renovation, transaction %, and FX rate</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label>Purchase price (€)</Label>
              <Input type="number" value={purchase} onChange={(e) => setPurchase(Number(e.target.value) || 0)} min={0} step={10000} />
            </div>
            <div className="space-y-2">
              <Label>Renovation budget (€)</Label>
              <Input type="number" value={reno} onChange={(e) => setReno(Number(e.target.value) || 0)} min={0} step={10000} />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Transaction + setup (%)</Label>
                <Input type="number" value={txPct} onChange={(e) => setTxPct(Number(e.target.value) || 0)} min={0} max={25} step={0.5} />
              </div>
              <div className="space-y-2">
                <Label>CAD/EUR rate</Label>
                <Input type="number" value={fx} onChange={(e) => setFx(Number(e.target.value) || 1.5)} min={1.3} max={1.8} step={0.01} />
              </div>
            </div>
            <div className="border-t pt-4 space-y-2">
              <Label className="text-muted-foreground">Optional — STR yield</Label>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label className="text-xs">ADR (€/night)</Label>
                  <Input type="number" value={adr} onChange={(e) => setAdr(Number(e.target.value) || 0)} min={0} step={10} />
                </div>
                <div className="space-y-2">
                  <Label className="text-xs">Occupancy (nights/year)</Label>
                  <Input type="number" value={occ} onChange={(e) => setOcc(Number(e.target.value) || 0)} min={0} max={365} step={5} />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Total budget</CardTitle>
            <CardDescription>EUR and CAD totals; optional gross yield</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <p className="text-3xl font-bold">{formatEur(totalEur)}</p>
              <p className="text-muted-foreground">{formatCad(totalCad)} CAD</p>
            </div>
            <table className="w-full text-sm">
              <tbody>
                <tr><td className="py-1">Purchase</td><td className="text-right">{formatEur(purchase)}</td></tr>
                <tr><td className="py-1">Renovation</td><td className="text-right">{formatEur(reno)}</td></tr>
                <tr><td className="py-1">Transaction + setup</td><td className="text-right">{formatEur(tx)}</td></tr>
              </tbody>
            </table>
            {adr > 0 && occ > 0 && (
              <div className="border-t pt-4 text-sm">
                <p className="font-medium">Gross STR yield (simplified)</p>
                <p className="text-muted-foreground">
                  Revenue {formatEur(grossRev)}/year → {yieldPct.toFixed(1)}% gross yield (before tax, insurance, management).
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
