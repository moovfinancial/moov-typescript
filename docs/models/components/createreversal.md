# CreateReversal

## Example Usage

```typescript
import { CreateReversal } from "@moovio/sdk/models/components";

let value: CreateReversal = {
  amount: {
    currency: "USD",
    valueDecimal: "12.987654321",
  },
  amountDetails: {
    surcharge: {
      currency: "USD",
      valueDecimal: "12.987654321",
    },
  },
};
```

## Fields

| Field                                                                                                                                              | Type                                                                                                                                               | Required                                                                                                                                           | Description                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `amount`                                                                                                                                           | [components.AmountDecimal](../../models/components/amountdecimal.md)                                                                               | :heavy_check_mark:                                                                                                                                 | Amount to reverse. Before v2026.10, specify the amount in integer cents. Partial amounts automatically trigger a refund instead of a cancellation. |
| `amountDetails`                                                                                                                                    | [components.ReversalAmountDetails](../../models/components/reversalamountdetails.md)                                                               | :heavy_minus_sign:                                                                                                                                 | Breakdown of the reversed amount.                                                                                                                  |