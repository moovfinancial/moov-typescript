# ACHFees

A detailed breakdown of ACH fees.

## Example Usage

```typescript
import { ACHFees } from "@moovio/sdk/models/components";

let value: ACHFees = {
  standardCredit: {
    count: 289671,
    amount: {
      currency: "USD",
      valueDecimal: "12.987654321",
    },
  },
  sameDayCredit: {
    count: 530096,
    amount: {
      currency: "USD",
      valueDecimal: "12.987654321",
    },
  },
  debits: {
    count: 400977,
    amount: {
      currency: "USD",
      valueDecimal: "12.987654321",
    },
  },
  return: {
    count: 713116,
    amount: {
      currency: "USD",
      valueDecimal: "12.987654321",
    },
  },
  unauthorizedReturn: {
    count: 798297,
    amount: {
      currency: "USD",
      valueDecimal: "12.987654321",
    },
  },
  noticeOfChange: {
    count: 991387,
    amount: {
      currency: "USD",
      valueDecimal: "12.987654321",
    },
  },
  bankAccountVerification: {
    count: 513363,
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
| `standardCredit`                                                                     | [components.BillingCountAndAmount](../../models/components/billingcountandamount.md) | :heavy_check_mark:                                                                   | Fees for standard credit transfers.                                                  |
| `sameDayCredit`                                                                      | [components.BillingCountAndAmount](../../models/components/billingcountandamount.md) | :heavy_check_mark:                                                                   | Fees for same-day credit transfers.                                                  |
| `debits`                                                                             | [components.BillingCountAndAmount](../../models/components/billingcountandamount.md) | :heavy_check_mark:                                                                   | Fees for debit transfers.                                                            |
| `return`                                                                             | [components.BillingCountAndAmount](../../models/components/billingcountandamount.md) | :heavy_check_mark:                                                                   | Fees for authorized returns.                                                         |
| `unauthorizedReturn`                                                                 | [components.BillingCountAndAmount](../../models/components/billingcountandamount.md) | :heavy_check_mark:                                                                   | Fees for unauthorized returns.                                                       |
| `noticeOfChange`                                                                     | [components.BillingCountAndAmount](../../models/components/billingcountandamount.md) | :heavy_check_mark:                                                                   | Fees for notices of change.                                                          |
| `bankAccountVerification`                                                            | [components.BillingCountAndAmount](../../models/components/billingcountandamount.md) | :heavy_check_mark:                                                                   | Fees for successful bank account verifications via Plaid or MX.                      |
| `total`                                                                              | [components.BillingCountAndAmount](../../models/components/billingcountandamount.md) | :heavy_check_mark:                                                                   | Total ACH fees.                                                                      |