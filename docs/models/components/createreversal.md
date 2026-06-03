# CreateReversal

## Example Usage

```typescript
import { CreateReversal } from "@moovio/sdk/models/components";

let value: CreateReversal = {
  amount: 1000,
  amountDetails: {
    surcharge: {
      currency: "USD",
      valueDecimal: "12.987654321",
    },
  },
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                | Example                                                                                                    |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `amount`                                                                                                   | *number*                                                                                                   | :heavy_check_mark:                                                                                         | Amount to reverse in cents. Partial amounts will automatically trigger a refund instead of a cancellation. | 1000                                                                                                       |
| `amountDetails`                                                                                            | [components.ReversalAmountDetails](../../models/components/reversalamountdetails.md)                       | :heavy_minus_sign:                                                                                         | Breakdown of the reversed amount.                                                                          |                                                                                                            |