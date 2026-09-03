# AdjustmentFees

A detailed breakdown of adjustment (correction) fees by fee name.

## Example Usage

```typescript
import { AdjustmentFees } from "@moovio/sdk/models/components";

let value: AdjustmentFees = {
  items: [
    {
      feeName: "<value>",
      count: 474711,
      amount: {
        currency: "USD",
        valueDecimal: "12.987654321",
      },
    },
  ],
  total: {
    count: 429311,
    amount: {
      currency: "USD",
      valueDecimal: "12.987654321",
    },
  },
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `items`                                                                              | [components.BillingAdjustment](../../models/components/billingadjustment.md)[]       | :heavy_check_mark:                                                                   | Adjustment fees grouped by fee name.                                                 |
| `total`                                                                              | [components.BillingCountAndAmount](../../models/components/billingcountandamount.md) | :heavy_check_mark:                                                                   | Total adjustment fees.                                                               |