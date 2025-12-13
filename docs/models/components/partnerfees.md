# PartnerFees

Monthly partner costs that are charged separately and not included in residual subtotal (e.g. platform fees, minimums).

## Example Usage

```typescript
import { PartnerFees } from "@moovio/sdk/models/components";

let value: PartnerFees = {
  minimumCommitment: {
    count: 869953,
    amount: {
      currency: "USD",
      valueDecimal: "12.987654321",
    },
  },
  monthlyPlatform: {
    count: 474711,
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

| Field                                                                                                                                               | Type                                                                                                                                                | Required                                                                                                                                            | Description                                                                                                                                         |
| --------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| `minimumCommitment`                                                                                                                                 | [components.BillingCountAndAmount](../../models/components/billingcountandamount.md)                                                                | :heavy_minus_sign:                                                                                                                                  | The minimum spending amount that must be met in the billing period. If actual usage is below the minimum amount, account is charged the difference. |
| `monthlyPlatform`                                                                                                                                   | [components.BillingCountAndAmount](../../models/components/billingcountandamount.md)                                                                | :heavy_minus_sign:                                                                                                                                  | Fixed recurring fee for the billing period regardless of usage.                                                                                     |
| `total`                                                                                                                                             | [components.BillingCountAndAmount](../../models/components/billingcountandamount.md)                                                                | :heavy_check_mark:                                                                                                                                  | Total partner fees.                                                                                                                                 |