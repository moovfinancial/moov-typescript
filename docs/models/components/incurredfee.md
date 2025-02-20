# IncurredFee

A fee incurred by a user.

## Example Usage

```typescript
import { IncurredFee } from "@moovio/sdk/models/components";

let value: IncurredFee = {
  amount: {
    currency: "USD",
    valueDecimal: "12.987654321",
  },
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `feeID`                                                                                       | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `accountID`                                                                                   | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `walletID`                                                                                    | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `createdOn`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `feeName`                                                                                     | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `amount`                                                                                      | [components.AmountDecimal](../../models/components/amountdecimal.md)                          | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `generatedBy`                                                                                 | *components.GeneratedBy*                                                                      | :heavy_minus_sign:                                                                            | The entity that generated the fee.                                                            |