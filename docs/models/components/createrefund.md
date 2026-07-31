# CreateRefund

Specifies a partial amount to refund. 

Before v2026.10, this request body may be omitted. In v2026.10 and later, send an empty object to refund the full amount of the original transfer.

## Example Usage

```typescript
import { CreateRefund } from "@moovio/sdk/models/components";

let value: CreateRefund = {
  amountDetails: {
    surcharge: {
      currency: "USD",
      valueDecimal: "12.987654321",
    },
  },
};
```

## Fields

| Field                                                                                                                                     | Type                                                                                                                                      | Required                                                                                                                                  | Description                                                                                                                               |
| ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| `amount`                                                                                                                                  | *number*                                                                                                                                  | :heavy_minus_sign:                                                                                                                        | Amount to refund. Before v2026.10, specify the amount in integer cents. If omitted, the original transfer's full amount will be refunded. |
| `amountDetails`                                                                                                                           | [components.RefundAmountDetails](../../models/components/refundamountdetails.md)                                                          | :heavy_minus_sign:                                                                                                                        | Breakdown of the refunded amount.                                                                                                         |