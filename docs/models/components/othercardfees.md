# OtherCardFees

A detailed breakdown of other card-related fees.

## Example Usage

```typescript
import { OtherCardFees } from "@moovio/sdk/models/components";

let value: OtherCardFees = {
  disputes: {
    count: 208853,
    amount: {
      currency: "USD",
      valueDecimal: "12.987654321",
    },
  },
  cardAccountUpdater: {
    count: 937454,
    amount: {
      currency: "USD",
      valueDecimal: "12.987654321",
    },
  },
  cardVerification: {
    count: 371999,
    amount: {
      currency: "USD",
      valueDecimal: "12.987654321",
    },
  },
  nameVerification: {
    count: 341965,
    amount: {
      currency: "USD",
      valueDecimal: "12.987654321",
    },
  },
  total: {
    count: 984400,
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
| `disputes`                                                                           | [components.BillingCountAndAmount](../../models/components/billingcountandamount.md) | :heavy_check_mark:                                                                   | Fees for disputes.                                                                   |
| `cardAccountUpdater`                                                                 | [components.BillingCountAndAmount](../../models/components/billingcountandamount.md) | :heavy_check_mark:                                                                   | Fees for card account updater services.                                              |
| `cardVerification`                                                                   | [components.BillingCountAndAmount](../../models/components/billingcountandamount.md) | :heavy_check_mark:                                                                   | Fees for card verification.                                                          |
| `nameVerification`                                                                   | [components.BillingCountAndAmount](../../models/components/billingcountandamount.md) | :heavy_check_mark:                                                                   | Fees for name verification.                                                          |
| `total`                                                                              | [components.BillingCountAndAmount](../../models/components/billingcountandamount.md) | :heavy_check_mark:                                                                   | Total other card fees.                                                               |