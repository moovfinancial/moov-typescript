# BillingAdjustment

An adjustment (correction) fee grouped by its statement line-item name.

## Example Usage

```typescript
import { BillingAdjustment } from "@moovio/sdk/models/components";

let value: BillingAdjustment = {
  feeName: "<value>",
  count: 998541,
  amount: {
    currency: "USD",
    valueDecimal: "12.987654321",
  },
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `feeName`                                                                | *string*                                                                 | :heavy_check_mark:                                                       | The name of the adjustment fee, shown as the statement line item.        |
| `count`                                                                  | *number*                                                                 | :heavy_check_mark:                                                       | The number of adjustments with this fee name.                            |
| `amount`                                                                 | [components.AmountDecimal](../../models/components/amountdecimal.md)     | :heavy_check_mark:                                                       | The total amount for this fee name. May be negative for a credit/refund. |