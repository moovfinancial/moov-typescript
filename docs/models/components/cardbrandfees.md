# CardBrandFees

## Example Usage

```typescript
import { CardBrandFees } from "@moovio/sdk/models/components";
import { Decimal } from "@moovio/sdk/types";

let value: CardBrandFees = {
  interchange: {
    count: 869953,
    amount: {
      currency: "USD",
      valueDecimal: "12.987654321",
    },
  },
  interchangePrograms: [
    {
      programName: "<value>",
      count: 474711,
      percentageRate: new Decimal("8423.25"),
      perItemRate: {
        currency: "USD",
        valueDecimal: "12.987654321",
      },
      total: {
        currency: "USD",
        valueDecimal: "12.987654321",
      },
      transferVolume: {
        currency: "USD",
        valueDecimal: "12.987654321",
      },
    },
  ],
  networkPassthrough: {
    count: 61692,
    amount: {
      currency: "USD",
      valueDecimal: "12.987654321",
    },
  },
  completedDomesticOnline: {
    count: 886189,
    amount: {
      currency: "USD",
      valueDecimal: "12.987654321",
    },
  },
  completedDomesticInPerson: {
    count: 265452,
    amount: {
      currency: "USD",
      valueDecimal: "12.987654321",
    },
  },
  completedInternationalOnline: {
    count: 731715,
    amount: {
      currency: "USD",
      valueDecimal: "12.987654321",
    },
  },
  completedInternationalInPerson: {
    count: 459127,
    amount: {
      currency: "USD",
      valueDecimal: "12.987654321",
    },
  },
  declines: {
    count: 398071,
    amount: {
      currency: "USD",
      valueDecimal: "12.987654321",
    },
  },
  refunds: {
    count: 60255,
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

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `interchange`                                                                                        | [components.BillingCountAndAmount](../../models/components/billingcountandamount.md)                 | :heavy_minus_sign:                                                                                   | Details of interchange fees.                                                                         |
| `interchangePrograms`                                                                                | [components.BillingInterchangeProgramFee](../../models/components/billinginterchangeprogramfee.md)[] | :heavy_minus_sign:                                                                                   | A list of interchange program fees.                                                                  |
| `networkPassthrough`                                                                                 | [components.BillingCountAndAmount](../../models/components/billingcountandamount.md)                 | :heavy_minus_sign:                                                                                   | Details of network passthrough fees.                                                                 |
| `completedDomesticOnline`                                                                            | [components.BillingCountAndAmount](../../models/components/billingcountandamount.md)                 | :heavy_minus_sign:                                                                                   | Details of completed domestic online transactions.                                                   |
| `completedDomesticInPerson`                                                                          | [components.BillingCountAndAmount](../../models/components/billingcountandamount.md)                 | :heavy_minus_sign:                                                                                   | Details of completed domestic in-person transactions.                                                |
| `completedInternationalOnline`                                                                       | [components.BillingCountAndAmount](../../models/components/billingcountandamount.md)                 | :heavy_minus_sign:                                                                                   | Details of completed international online transactions.                                              |
| `completedInternationalInPerson`                                                                     | [components.BillingCountAndAmount](../../models/components/billingcountandamount.md)                 | :heavy_minus_sign:                                                                                   | Details of completed international in-person transactions.                                           |
| `declines`                                                                                           | [components.BillingCountAndAmount](../../models/components/billingcountandamount.md)                 | :heavy_minus_sign:                                                                                   | Details of declined transactions.                                                                    |
| `refunds`                                                                                            | [components.BillingCountAndAmount](../../models/components/billingcountandamount.md)                 | :heavy_minus_sign:                                                                                   | Details of refunded transactions.                                                                    |
| `total`                                                                                              | [components.BillingCountAndAmount](../../models/components/billingcountandamount.md)                 | :heavy_check_mark:                                                                                   | Total fees for this card brand.                                                                      |