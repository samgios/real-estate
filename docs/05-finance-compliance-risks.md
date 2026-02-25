# 5. Finance, compliance and risks

## 1) Funding

### Preferences

- **Deal #1:** Assume higher equity; do not rely on refinance for the thesis.
- **Funding:** Prefer cash or low debt; bank debt possible but not base case for Deal #1.

### Typical components

- Investor equity
- Optional shareholder/investor loan (for repayment priority)
- Supplier credit / deferred payment (document clearly)
- Bank debt (possible; mainly Italian banks against the asset)

### Research summary: FX (CAD→EUR) — transfer, conversion, hedging (Feb 2026)

*Full report: `docs/research/results/10-Canadian Investors Fund Italian Real Estate.md`*

**Transfer options (€400k illustrative):** **Big 5 banks** — 2.5–4.5% markup + wire fees ($45–80); total cost **$15–25k CAD**; intermediary deductions can cause shortfalls at notary. **Specialist FX** (MTFX, OFX, Knightsbridge FX) — spread ~0.3–0.6%, **$3–6k**; dedicated support, correct IBAN formatting, forward contracts, limit/rate-alert orders; send directly to notary escrow. **Wise** — mid-market rate, ~0.48% fee; best for **small payments** (e.g. reservation deposit €5–10k); for €400k+ percentage fee can exceed specialist. **IBKR** — near-interbank + $2 commission but **not** for one-off “convert and withdraw”; used only for FX can breach ToS and trigger account review/closure. **KYC/AML:** Sums >$50k require ID and proof of source (e.g. bank statements 3–6 months); provide upfront to avoid frozen transfers. **FINTRAC:** Institutions report international EFT ≥$10k; investor keeps “reason for transfer” and beneficiary details.

**Conversion practice:** Staged conversion (per milestone: proposta, compromesso, rogito) keeps capital in CAD longer but exposes largest payment to volatility. Specialists offer **limit orders** (convert only at target rate) and **rate alerts**. Use **notary’s dedicated escrow** (*Deposito del Prezzo*, Law 147/2013) for final balance—funds released only after deed registration; maximizes traceability for Italian authorities.

**Hedging:** For **>60 days** between compromesso and rogito, **forward contract** is recommended. A 5% adverse CAD/EUR move on €400k ≈ **$30k CAD** extra cost. Forward locks rate for future date (e.g. up to 12 months); typically 5–10% deposit (security), not full principal. **Pros:** budget certainty; **cons:** no benefit if CAD strengthens; if property deal fails, FX contract may still need to be closed; margin calls if rate moves sharply. MTFX, OFX offer forwards to Canadians; some banks (e.g. National Bank) for business only. **Do not** try to time the market; goal is budget certainty.

**Italy — documentation:** Notary (and AML under D.Lgs 231/2007) requires **legitimate origin**: Canadian bank statements (accumulation 3–6 months), **FX deal note** (CAD→EUR conversion), SWIFT MT103 confirmation. **Bonifico Parlante:** Italian renovation tax credits (e.g. 36% Bonus Ristrutturazioni) require payment via *bonifico parlante* (specific fields: CF, P.IVA, law reference); most FX specialists and **Wise do not support** it—fund reno via **Italian non-resident account** and pay contractors from there. Codice Fiscale required for any transaction; local account practical for IMU, TARI, utilities.

**Canada — reporting and ACB:** **T1135** if specified foreign property **cost base >$100k CAD** (ACB = purchase + fees + improvements, converted at rate on **transaction date**). Personal-use property (e.g. >50% owner/family use) excluded; **investment/rental** must be reported. Part A (simplified) if cost $100k–&lt;$250k; Part B (detailed) if ≥$250k. **ACB for capital gains:** Record **Bank of Canada daily rate** on the date of each payment (purchase and each reno payment); reno invoices + payment receipts + rate per date; sum in CAD = ACB. (If S.r.l. holds property, T1134 may apply—see Canadian tax summary above; T1135 and T1134 interaction as in topic 4.)

**Practical checklist:** (1) Wise for proposta/caparra; specialist (MTFX/OFX) for main deposit and final balance; instruct specialist to send final balance to **notary escrow**. (2) Once compromesso signed and rogito date known, lock rate with forward for final payment. (3) Keep full file: Canadian statements (source), FX deal notes, SWIFT confirmations, reno invoices + dates + BoC rate for ACB. (4) Obtain Codice Fiscale early; open Italian non-resident account if claiming Italian reno tax credits. (5) If renting and total cost base >$100k CAD, file T1135 (and T1134 if S.r.l. structure).

---

## 2) Banks / lenders — questions to prepare

- Mortgage conditions for an SPV owned by non-residents
- Requirements (accounts, documents, guarantees)
- Refinance after works (if portfolio strategy)

### Research summary: Italian mortgages for non-resident-owned S.r.l. (Feb 2026)

*Full report: `docs/research/results/02-Italian Mortgages for Foreign-Owned S.r.l..md`*

**Accessible lenders:** Intesa Sanpaolo and UniCredit are the main options (international / “Clienti Esteri” desks). Also: BPER Banca (SAL/renovation financing, up to 20 years), BNL (BNP Paribas, wealth/structuring), Banca Sella (e.g. Mutuo Green). Many regional/cooperative banks and some brokers (e.g. Top Italian Mortgage) avoid or restrict corporate/foreign-owned borrowers. HSBC can refer existing premier clients to Italian mortgage teams.

**Typical terms for non-resident S.r.l.:** LTV 50–60% (based on bank *perizia* appraisal, often 10–15% below price—plan for a valuation gap). Rates ~4–5.5% APR; term 15–25 years (maturity often capped at age 75 of guarantor). Minimum loan often €100k–€250k. French or Italian amortization; quarterly/semi-annual payments common. All in EUR; banks apply a conservative “haircut” to CAD income for affordability.

**Requirements:** Reciprocity (Canada qualifies). S.r.l. Ordinaria (not S.r.l.s.); €10k capital. **Resident director or legal representative** usually required to open the corporate account and for the mortgage—nominee director or Italian professional (lawyer/accountant) is the standard workaround. **Documents:** Codice Fiscale for all; 3 years Canadian tax returns + 3 months payslips; 6–12 months bank statements; Canadian credit report; Visura, Atto Costitutivo, business plan for the SPV. **Canada–Italy:** Since Jan 2024, Canadian documents use **Apostille** (single step); Italian banks still require **Traduzione Giurata** (sworn translation).

**Main hurdles:** (1) **Corporate account** — most common failure point; use local legal rep or PoA and consider resident director for first 12 months. (2) **Valuation gap** — perizia below purchase price; hold 5–10% extra liquidity. (3) **Property compliance** — “Relazione Tecnica Integrata”; many properties have cadastral/permits issues; do technical due diligence before caparra; ensure property is “mutuabile.” (4) **Personal guarantee** — “Fideiussione” from shareholders (often solidale); mortgage must be for the asset, not equity.

**Budget implication for €500k deal:** Plan €300k–€350k liquid (40% down + ~10–12% transaction costs + 5–10% valuation gap + ~€15k S.r.l. setup). Get **pre-approval (Delibera Reddituale)** from Intesa or UniCredit before signing a preliminary contract.

**Refinance:** Cash-out refinance is uncommon; “Surrogazione” (portability) does not increase loan size; “Sostituzione” (new, larger loan) possible but costly (e.g. 2% imposta for non-residents). For scaling, **cross-collateralization** (first property as security for second) is often more practical than equity release. **Mutuo SAL** (renovation): disbursement in stages (e.g. 30%, 60%, 90% completion); SPV needs liquidity to pay first stage.

---

## 3) Compliance and tax checklist

### Italy

- S.r.l. incorporation, accounting obligations, VAT/IVA if applicable
- Notary (deed) + construction contracts

### Research summary: Italian S.r.l. setup and obligations for Canadian owners (Feb 2026)

*Full report: `docs/research/results/03-Italian S.r.l. for Canadian Property Owners.md`*

**Reciprocity (critical):** Canada’s foreign-buyer ban (to 2027) triggers Italian reciprocal limits. A Canadian-owned S.r.l. (or Canadian individual) is generally allowed to buy residential property only in **Italian municipalities with &lt;10,000 inhabitants** (and not satellite towns of large cities). Major urban centers (e.g. Florence, Rome, Milan) are typically off limits unless an exception applies (e.g. dual citizenship, pre-existing preliminary contract). The notary verifies reciprocity before the deed; if not met, the deed is void. For Deal #1 (opportunity-driven, possibly Puglia/Salento), confirm with the notary for the **specific comune** before committing.

**Setup (4–8 weeks):** (I) **Codice Fiscale** for each shareholder and director (via Italian consulate in Canada or PoA to local professional). Canadian corporate docs translated + **Apostille**. (II) **Atto Costitutivo** and **Statuto** signed before Italian notary; often via **Procura Speciale** (Apostilled in Canada). Share capital: 100% upfront if single shareholder, 25% minimum if multiple; often deposited to notary escrow (faster than opening a bank account first). (III) Notary files with **Registro delle Imprese** within 20 days; **Partita IVA**; **PEC** and digital signature for legal rep. (IV) **Corporate bank account** is the main bottleneck—most banks require in-person KYC; without an account the S.r.l. cannot pay IMU/utilities electronically. Use a local **nominee director** or **special proxy** (Italian lawyer/accountant) to open the account and handle F24/tax payments.

**Costs (2026 ballpark):** One-time setup **€6,500–€13,000** (notary €1.8–3.5k, bylaws/legal €2–5k, registration €600–1k, translation/Apostille €500–1.2k, tax ID €100–300/person). Share capital **€1–€10,000+** (€10k S.r.l. Ordinaria preferred for bank credibility; S.r.l.s. is for natural persons only). **Annual compliance €4,500–€9,000** (Commercialista, financial statements, IRES/IRAP/VAT returns, Chamber fee ~€90, UBO confirmation, registered office/PEC). Property taxes (IMU, TARI) on top.

**Director:** No legal requirement for an Italian resident director; a Canadian can be sole director. From **Jan 2025** each director must have a **personal PEC** (certified email) registered with the Companies Register. In practice, banks and authorities expect a **local representative**; use a nominee director or special proxy in Italy for banking and admin.

**Main pitfalls:** (1) **Società di comodo** — if the S.r.l. does not generate revenue of at least **4.75% of the property’s value per year** (e.g. via STR), it can be classified as “non-operating”; then 34.5% IRES (surcharge), no deduction of many costs, no VAT recovery. Plan rental/STR to clear this bar. (2) **Look-through (Art. 23(1-bis))** — if a Canadian sells S.r.l. shares and &gt;50% of value is Italian real estate, Italy can tax the capital gain at 26%. (3) **Dividend withholding** 26%; Canada–Italy treaty may reduce it but requires CRA Certificate of Residence. (4) **VAT** on purchase/renovation of residential is often not recoverable (exempt activity); “tourist accommodation” classification can change this—confirm with Commercialista.

**Questions for Commercialista:** Reciprocity for the target comune; exact 4.75% revenue threshold and implications if not renting; which banks accept Canadian-directed S.r.l. and cost of Italian proxy; VAT on renovation/tourist accommodation; look-through and Canadian reporting; director INPS/social security (Canada–Italy treaty); PEC/digital domicile for Canadian directors; UBO if using a trust; inheritance tax; electronic invoicing/SDI for utilities and contractors.

### Research summary: Italian property purchase process and costs (Feb 2026)

*Full report: `docs/research/results/07-Italian Property Purchase for Investors.md`*

**Process (10 steps, S.r.l. as buyer):** (1) Codice Fiscale + reciprocity verification for all directors/shareholders. (2) S.r.l. incorporation (notary, share capital, Registro delle Imprese). (3) Geometra: Conformità Urbanistica e Catastale (avoid post-acquisition sanatoria). (4) Proposta d’acquisto + caparra confirmatoria (if buyer defaults, seller keeps deposit; if seller defaults, double refund). (5) Contratto preliminare (compromesso)—must be transcribed by notary to secure priority vs third parties. (6) Notary: 20-year title search (ispezione ipotecaria), lien clearance. (7) Funds to notary escrow or assegni circolari. (8) Rogito notarile (final deed); notary reads deed, registers transfer and pays taxes within 30 days. (9) Registration and transcription. (10) Handover + voltura (utilities to S.r.l.).

**Notary role:** Public official; verifies legal capacity (including reciprocity for Canadians), 20-year title search, mortgage/lien clearance, cadastral alignment. Dossier: APE, CDU (for land), building permits/titolo abilitativo, identity/tax docs. **Fees:** ~1–2.5% of value; €500k deal ≈ €4,500–€5,500 (excl. taxes).

**Costs (S.r.l. buyer, resale):** **Total closing 15–22%** (individual 10–16%). Purchase tax: **9% on actual price** (S.r.l. cannot use prezzo-valore). Fixed mortgage/cadastral €50 each. **New build from company:** IVA 10% (residential) or 22% (luxury A/1, A/8, A/9); registration/mortgage/cadastral fixed €200 each. **Example €400k:** purchase tax €36k (9%), notary/legal ~€8.5k, agency ~€19.5k (4%+VAT), technical ~€2.5k → **~€66.5k (16.6%)**. Underwriting: budget **16–18%** for acquisition cost; S.r.l. can capitalize and depreciate.

**Timeline:** **4–6 months** (S.r.l.); 3–5 months individual. Typical: weeks 1–4 CF + geometra; 5–6 S.r.l. + bank; 7–8 proposta; 9–14 compromesso; 15–20 due diligence + deed prep; week 21 rogito. **Bottlenecks:** Sanatoria (2–4 months if cadastral/permits issues); corporate bank KYC 4–6 weeks; prelazione (right of first refusal, e.g. Ministry of Culture, farmers) 60 days.

**Land vs existing:** Land: verify CDU (zoning, building index); terreno edificabile = 9% registration tax. New build: Permesso di Costruire (not CILA/SCIA); geological/technical survey; oneri di urbanizzazione; construction contract 10% VAT; land from company 22% IVA.

### Canada (investors)

- Form of investment (personal vs HoldCo)
- Foreign asset reporting (as applicable)
- Treatment of income/loss (sale vs rental)

### Research summary: Canadian tax on Italian real estate (S.r.l. held by Canadians) (Feb 2026)

*Full report: `docs/research/results/04-Canadian Tax on Italian Real Estate.md`*

**Reporting (critical):** **T1134** (foreign affiliate) — required when Canadians hold ≥1% and group holds ≥10% of the S.r.l.; if group holds >50% it is a Controlled Foreign Affiliate (CFA) with full reporting. Deadline **10 months** after taxpayer’s year-end. Summary + one Supplement per affiliate; exemptions only for very small inactive entities. Penalties: $2,500 per supplement, up to $12k for gross negligence, and 5% of share cost if >24 months late. **T1135** (specified foreign property >$100k CAD) — if T1134 is filed for the S.r.l. shares, those shares are not reported again on T1135; but other SFP (e.g. Italian bank account in investor’s name) still counts toward the $100k threshold. **Quebec:** Form TP-1079.8.BE-V for taxation years ending after Dec 30, 2025; $500/month penalty (max $12k); extended reassessment period if omitted. **T106** if non-arm’s length transactions with non-residents >$1M.

**Rental income — FAPI:** Rental income earned by the S.r.l. is **Foreign Accrual Property Income (FAPI)**; it is taxed in Canada on an **accrual basis** (even if not distributed). A deduction is allowed for Italian tax paid (Foreign Accrual Tax), adjusted by the **Relevant Tax Factor (RTF)**. **Individual** shareholders: RTF 1.9 (~52.6% equivalent rate) — Italian IRES+IRAP ~27.9% often does not fully offset, so **residual Canadian tax** on FAPI. **Canadian HoldCo** holding the S.r.l.: RTF 4.0 (25%) — usually **no additional Canadian tax** on FAPI. Plan for **cash flow** to pay Canadian tax on accrued but undistributed FAPI. Shareholder agreement should address sharing of FAT deduction and tax payments.

**Capital gains:** If the **S.r.l. sells the property**, the gain is Italian corporate income (27.9%) and included in FAPI in Canada. If the investment is “renovate and sell” quickly, CRA may treat it as **“adventure in the nature of trade”** (100% inclusion) rather than capital gain (50%). If **Canadians sell the S.r.l. shares**: Italy can tax under **Art. 23(1-bis)** (land-rich entity, >50% value from Italian real estate) at **26%**; Canada taxes as capital gain with **Foreign Tax Credit** for Italian tax. The 5-year capital gains exemption in Italy does **not** apply to a share sale.

**Structures (brief):** **Direct ownership** — often blocked by reciprocity; if allowed, simple reporting (T1135), Italian cedolare secca option, 5-year exemption on property sale. **S.r.l. held personally** — bypasses reciprocity, limited liability; FAPI with 1.9 RTF (residual Canadian tax), T1134, Italian 26% on share sale. **Canadian HoldCo → S.r.l.** — best FAPI outcome (4.0 RTF); more admin (T2, T1134); watch **Lifetime Capital Gains Exemption** “purification” if HoldCo holds too much foreign real estate.

**Management and control:** If the S.r.l. is effectively **managed from Canada** (decisions made in Canada), it may be deemed a **Canadian resident** and taxed in Canada on worldwide income. Mitigate with an Italian co-administrator and/or **board meetings in Italy**.

**Questions for Canadian tax advisor:** CFA and related-party status for the group; RTF 1.9 vs 4.0 comparison (including 27.9% Italian rate); evidence to support capital gains vs “adventure in the nature of trade” on sale; active-business exception (e.g. 5 full-time employees); cash flow strategy for Canadian tax on FAPI (s. 91(4)); Quebec TP-1079 timing and extended reassessment; Treaty Art. 13(4) and 365-day test for land-rich exit; steps to avoid S.r.l. being deemed Canadian resident; T1134 vs T1135 boundaries and deadlines per investor; FTC limits if property later used personally.

**Note:** Each Canadian investor may have a different situation; aim for a minimum of standardized documentation to reduce confusion.

### Professional stack

| Side | Roles |
|------|--------|
| **Italy** | Lawyer (real estate + corporate), Commercialista, Notary |
| **Canada** | Tax advisor with experience in foreign assets and investor structures |

---

## 4) Risk register

| Risk | Mitigation / note |
|------|--------------------|
| **Reciprocity (Canada→Italy)** | Canadian foreign-buyer ban → Italian reciprocal limits; purchase only in comuni <10k (or exception). Confirm with notary for target comune before caparra. |
| **Società di comodo** | S.r.l. must generate ≥4.75% of property value/year (e.g. STR) or face 34.5% IRES, no cost deductions. Plan rental from day one. |
| **Construction** | Cost/time overruns — contingency, contracts, governance on budget |
| **Permits / planning** | Due diligence; legal advice |
| **Governance** | Clear decisions, responsibilities, voting rules |
| **Cross-border tax** | Compliance and reporting; Italy + Canada advice |
| **FX (CAD/EUR)** | Awareness; optional hedging if material |
| **Liquidity** | Slower resale than planned — underwriting, exit strategy |
| **Rental operations (Mode C)** | Seasonality, management, maintenance — plan and reserves |
