# Residual

## Example Usage

```typescript
import { Residual } from "@moovio/sdk/models/components";

let value: Residual = {
  residualID: "2341c29d-f93c-42f8-af22-8195c34b7191",
  partnerAccountID: "d3454d32-aa0c-4d26-9791-3b66dd15870b",
  periodStart: new Date("2024-05-06T17:58:56.512Z"),
  periodEnd: new Date("2026-09-11T16:01:29.381Z"),
  merchantFees: {
    currency: "USD",
    valueDecimal: "12.987654321",
  },
  partnerCost: {
    currency: "USD",
    valueDecimal: "12.987654321",
  },
  netIncome: {
    currency: "USD",
    valueDecimal: "12.987654321",
  },
  revenueShare: "2.25",
  residualAmount: {
    currency: "USD",
    valueDecimal: "12.987654321",
  },
  createdOn: new Date("2026-11-13T14:20:09.847Z"),
  updatedOn: new Date("2025-12-19T17:29:10.040Z"),
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          | Example                                                                                                              |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `residualID`                                                                                                         | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | Unique identifier for this residual payment calculation.                                                             |                                                                                                                      |
| `partnerAccountID`                                                                                                   | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | The partner account ID this residual belongs to.                                                                     |                                                                                                                      |
| `periodStart`                                                                                                        | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                        | :heavy_check_mark:                                                                                                   | Start date and time of the residual calculation period.                                                              |                                                                                                                      |
| `periodEnd`                                                                                                          | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                        | :heavy_check_mark:                                                                                                   | End date and time of the residual calculation period.                                                                |                                                                                                                      |
| `merchantFees`                                                                                                       | [components.AmountDecimal](../../models/components/amountdecimal.md)                                                 | :heavy_check_mark:                                                                                                   | Total amount of merchant fees collected during the period. This represents the partner's revenue from merchant fees. |                                                                                                                      |
| `partnerCost`                                                                                                        | [components.AmountDecimal](../../models/components/amountdecimal.md)                                                 | :heavy_check_mark:                                                                                                   | Partner's total cost (buy rate) during the period.                                                                   |                                                                                                                      |
| `netIncome`                                                                                                          | [components.AmountDecimal](../../models/components/amountdecimal.md)                                                 | :heavy_check_mark:                                                                                                   | Net income calculated as merchant fee revenue minus partner costs.                                                   |                                                                                                                      |
| `revenueShare`                                                                                                       | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | The revenue share percentage the partner receives, expressed as a decimal string (e.g., "25.00" for 25%).            | 2.25                                                                                                                 |
| `residualAmount`                                                                                                     | [components.AmountDecimal](../../models/components/amountdecimal.md)                                                 | :heavy_check_mark:                                                                                                   | The amount the partner receives as their share of the net income (netIncome × revenueShare).                         |                                                                                                                      |
| `createdOn`                                                                                                          | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                        | :heavy_check_mark:                                                                                                   | Timestamp when the residual was created.                                                                             |                                                                                                                      |
| `updatedOn`                                                                                                          | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                        | :heavy_check_mark:                                                                                                   | Timestamp when the residual was last updated.                                                                        |                                                                                                                      |