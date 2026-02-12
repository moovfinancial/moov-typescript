# Residual

## Example Usage

```typescript
import { Residual } from "@moovio/sdk/models/components";

let value: Residual = {
  residualID: "<id>",
  partnerAccountID: "<id>",
  periodStart: new Date("2024-07-08T15:36:45.257Z"),
  periodEnd: new Date("2024-09-04T13:40:51.094Z"),
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
  createdOn: new Date("2024-10-07T09:59:23.847Z"),
  updatedOn: new Date("2024-03-27T23:35:26.423Z"),
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