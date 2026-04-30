# CardBrandFees

## Example Usage

```typescript
import { CardBrandFees } from "@moovio/sdk/models/components";
import { Decimal } from "@moovio/sdk/types";

let value: CardBrandFees = {
  interchange: {
    count: 47399,
    amount: {
      currency: "USD",
      valueDecimal: "12.987654321",
    },
  },
  interchangePrograms: [
    {
      programName: "<value>",
      count: 474428,
      percentageRate: new Decimal("5621.1"),
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
    count: 116027,
    amount: {
      currency: "USD",
      valueDecimal: "12.987654321",
    },
  },
  completedDomesticOnline: {
    count: 418959,
    amount: {
      currency: "USD",
      valueDecimal: "12.987654321",
    },
  },
  completedDomesticInPerson: {
    count: 778418,
    amount: {
      currency: "USD",
      valueDecimal: "12.987654321",
    },
  },
  completedInternationalOnline: {
    count: 921238,
    amount: {
      currency: "USD",
      valueDecimal: "12.987654321",
    },
  },
  completedInternationalInPerson: {
    count: 271021,
    amount: {
      currency: "USD",
      valueDecimal: "12.987654321",
    },
  },
  declines: {
    count: 367368,
    amount: {
      currency: "USD",
      valueDecimal: "12.987654321",
    },
  },
  refunds: {
    count: 539173,
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