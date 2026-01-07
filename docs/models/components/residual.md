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
  moovShare: {
    currency: "USD",
    valueDecimal: "12.987654321",
  },
  createdOn: new Date("2026-11-13T14:20:09.847Z"),
  updatedOn: new Date("2025-12-19T17:29:10.040Z"),
};
```

## Fields

| Field                                                                                                         | Type                                                                                                          | Required                                                                                                      | Description                                                                                                   | Example                                                                                                       |
| ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| `residualID`                                                                                                  | *string*                                                                                                      | :heavy_check_mark:                                                                                            | N/A                                                                                                           |                                                                                                               |
| `partnerAccountID`                                                                                            | *string*                                                                                                      | :heavy_check_mark:                                                                                            | N/A                                                                                                           |                                                                                                               |
| `periodStart`                                                                                                 | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                 | :heavy_check_mark:                                                                                            | N/A                                                                                                           |                                                                                                               |
| `periodEnd`                                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                 | :heavy_check_mark:                                                                                            | N/A                                                                                                           |                                                                                                               |
| `merchantFees`                                                                                                | [components.AmountDecimal](../../models/components/amountdecimal.md)                                          | :heavy_check_mark:                                                                                            | N/A                                                                                                           |                                                                                                               |
| `partnerCost`                                                                                                 | [components.AmountDecimal](../../models/components/amountdecimal.md)                                          | :heavy_check_mark:                                                                                            | N/A                                                                                                           |                                                                                                               |
| `netIncome`                                                                                                   | [components.AmountDecimal](../../models/components/amountdecimal.md)                                          | :heavy_check_mark:                                                                                            | N/A                                                                                                           |                                                                                                               |
| `revenueShare`                                                                                                | *string*                                                                                                      | :heavy_check_mark:                                                                                            |   The decimal-formatted numerical string of the revenue split for partner.<br/>  <br/>  For example, 2.25% is '2.25'. | 2.25                                                                                                          |
| `residualAmount`                                                                                              | [components.AmountDecimal](../../models/components/amountdecimal.md)                                          | :heavy_check_mark:                                                                                            | N/A                                                                                                           |                                                                                                               |
| `moovShare`                                                                                                   | [components.AmountDecimal](../../models/components/amountdecimal.md)                                          | :heavy_check_mark:                                                                                            | N/A                                                                                                           |                                                                                                               |
| `createdOn`                                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                 | :heavy_check_mark:                                                                                            | N/A                                                                                                           |                                                                                                               |
| `updatedOn`                                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                 | :heavy_check_mark:                                                                                            | N/A                                                                                                           |                                                                                                               |