# InstantPaymentFees

A detailed breakdown of instant payment fees.

## Example Usage

```typescript
import { InstantPaymentFees } from "@moovio/sdk/models/components";

let value: InstantPaymentFees = {
  rtpCreditTransaction: {
    count: 252042,
    amount: {
      currency: "USD",
      valueDecimal: "12.987654321",
    },
  },
  rtpDecline: {
    count: 832847,
    amount: {
      currency: "USD",
      valueDecimal: "12.987654321",
    },
  },
  pushToCardTransaction: {
    count: 139127,
    amount: {
      currency: "USD",
      valueDecimal: "12.987654321",
    },
  },
  pushToCardDecline: {
    count: 296674,
    amount: {
      currency: "USD",
      valueDecimal: "12.987654321",
    },
  },
  pullFromCardTransaction: {
    count: 65974,
    amount: {
      currency: "USD",
      valueDecimal: "12.987654321",
    },
  },
  pullFromCardDecline: {
    count: 942102,
    amount: {
      currency: "USD",
      valueDecimal: "12.987654321",
    },
  },
  pullFromCardRefund: {
    count: 405208,
    amount: {
      currency: "USD",
      valueDecimal: "12.987654321",
    },
  },
  instantVerification: {
    count: 208853,
    amount: {
      currency: "USD",
      valueDecimal: "12.987654321",
    },
  },
  total: {
    count: 842325,
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
| `rtpCreditTransaction`                                                               | [components.BillingCountAndAmount](../../models/components/billingcountandamount.md) | :heavy_check_mark:                                                                   | Fees for RTP credit transactions.                                                    |
| `rtpDecline`                                                                         | [components.BillingCountAndAmount](../../models/components/billingcountandamount.md) | :heavy_minus_sign:                                                                   | Fees for RTP declines.                                                               |
| `pushToCardTransaction`                                                              | [components.BillingCountAndAmount](../../models/components/billingcountandamount.md) | :heavy_check_mark:                                                                   | Fees for push-to-card transactions.                                                  |
| `pushToCardDecline`                                                                  | [components.BillingCountAndAmount](../../models/components/billingcountandamount.md) | :heavy_minus_sign:                                                                   | Fees for push-to-card declines.                                                      |
| `pullFromCardTransaction`                                                            | [components.BillingCountAndAmount](../../models/components/billingcountandamount.md) | :heavy_check_mark:                                                                   | Fees for pull-from-card transactions.                                                |
| `pullFromCardDecline`                                                                | [components.BillingCountAndAmount](../../models/components/billingcountandamount.md) | :heavy_minus_sign:                                                                   | Fees for pull-from-card declines.                                                    |
| `pullFromCardRefund`                                                                 | [components.BillingCountAndAmount](../../models/components/billingcountandamount.md) | :heavy_minus_sign:                                                                   | Fees for pull-from-card refunds.                                                     |
| `instantVerification`                                                                | [components.BillingCountAndAmount](../../models/components/billingcountandamount.md) | :heavy_check_mark:                                                                   | Fees for instant payment verifications.                                              |
| `total`                                                                              | [components.BillingCountAndAmount](../../models/components/billingcountandamount.md) | :heavy_check_mark:                                                                   | Total instant payment fees.                                                          |