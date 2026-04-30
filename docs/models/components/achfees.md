# ACHFees

A detailed breakdown of ACH fees.

## Example Usage

```typescript
import { ACHFees } from "@moovio/sdk/models/components";

let value: ACHFees = {
  standardCredit: {
    count: 429311,
    amount: {
      currency: "USD",
      valueDecimal: "12.987654321",
    },
  },
  sameDayCredit: {
    count: 641426,
    amount: {
      currency: "USD",
      valueDecimal: "12.987654321",
    },
  },
  debits: {
    count: 243742,
    amount: {
      currency: "USD",
      valueDecimal: "12.987654321",
    },
  },
  return: {
    count: 174053,
    amount: {
      currency: "USD",
      valueDecimal: "12.987654321",
    },
  },
  unauthorizedReturn: {
    count: 532273,
    amount: {
      currency: "USD",
      valueDecimal: "12.987654321",
    },
  },
  noticeOfChange: {
    count: 360465,
    amount: {
      currency: "USD",
      valueDecimal: "12.987654321",
    },
  },
  bankAccountVerification: {
    count: 975255,
    amount: {
      currency: "USD",
      valueDecimal: "12.987654321",
    },
  },
  total: {
    count: 172473,
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
| `standardCredit`                                                                     | [components.BillingCountAndAmount](../../models/components/billingcountandamount.md) | :heavy_check_mark:                                                                   | Fees for standard credit transfers.                                                  |
| `sameDayCredit`                                                                      | [components.BillingCountAndAmount](../../models/components/billingcountandamount.md) | :heavy_check_mark:                                                                   | Fees for same-day credit transfers.                                                  |
| `debits`                                                                             | [components.BillingCountAndAmount](../../models/components/billingcountandamount.md) | :heavy_check_mark:                                                                   | Fees for debit transfers.                                                            |
| `return`                                                                             | [components.BillingCountAndAmount](../../models/components/billingcountandamount.md) | :heavy_check_mark:                                                                   | Fees for authorized returns.                                                         |
| `unauthorizedReturn`                                                                 | [components.BillingCountAndAmount](../../models/components/billingcountandamount.md) | :heavy_check_mark:                                                                   | Fees for unauthorized returns.                                                       |
| `noticeOfChange`                                                                     | [components.BillingCountAndAmount](../../models/components/billingcountandamount.md) | :heavy_check_mark:                                                                   | Fees for notices of change.                                                          |
| `bankAccountVerification`                                                            | [components.BillingCountAndAmount](../../models/components/billingcountandamount.md) | :heavy_check_mark:                                                                   | Fees for successful bank account verifications via Plaid or MX.                      |
| `total`                                                                              | [components.BillingCountAndAmount](../../models/components/billingcountandamount.md) | :heavy_check_mark:                                                                   | Total ACH fees.                                                                      |