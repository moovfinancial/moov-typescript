# CreateRefund

Specifies a partial amount to refund. 

This request body is optional, an empty body will issue a refund for the full amount of the original transfer.

## Example Usage

```typescript
import { CreateRefund } from "@moovio/sdk/models/components";

let value: CreateRefund = {
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

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               | Example                                                                                   |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `amount`                                                                                  | *number*                                                                                  | :heavy_minus_sign:                                                                        | Amount to refund in cents. If null, the original transfer's full amount will be refunded. | 1000                                                                                      |
| `amountDetails`                                                                           | [components.RefundAmountDetails](../../models/components/refundamountdetails.md)          | :heavy_minus_sign:                                                                        | Breakdown of the refunded amount.                                                         |                                                                                           |