# BillingSummary

A summary of all fees included in a statement.

## Example Usage

```typescript
import { BillingSummary } from "@moovio/sdk/models/components";

let value: BillingSummary = {
  cardAcquiring: {
    volumeAmount: {
      currency: "USD",
      valueDecimal: "12.987654321",
    },
    feeAmount: {
      currency: "USD",
      valueDecimal: "12.987654321",
    },
    interchangeFees: {
      visa: {
        currency: "USD",
        valueDecimal: "12.987654321",
      },
      mastercard: {
        currency: "USD",
        valueDecimal: "12.987654321",
      },
      discover: {
        currency: "USD",
        valueDecimal: "12.987654321",
      },
      americanExpress: {
        currency: "USD",
        valueDecimal: "12.987654321",
      },
    },
  },
  ach: {
    volumeAmount: {
      currency: "USD",
      valueDecimal: "12.987654321",
    },
    feeAmount: {
      currency: "USD",
      valueDecimal: "12.987654321",
    },
  },
  instantPayments: {
    volumeAmount: {
      currency: "USD",
      valueDecimal: "12.987654321",
    },
    feeAmount: {
      currency: "USD",
      valueDecimal: "12.987654321",
    },
  },
  platformFees: {
    currency: "USD",
    valueDecimal: "12.987654321",
  },
  adjustmentFees: {
    currency: "USD",
    valueDecimal: "12.987654321",
  },
  otherFees: {
    currency: "USD",
    valueDecimal: "12.987654321",
  },
  total: {
    currency: "USD",
    valueDecimal: "12.987654321",
  },
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `cardAcquiring`                                                                      | [components.CardAcquiring](../../models/components/cardacquiring.md)                 | :heavy_minus_sign:                                                                   | A summary of card acquiring volume and fees.                                         |
| `ach`                                                                                | [components.BillingSummaryDetails](../../models/components/billingsummarydetails.md) | :heavy_minus_sign:                                                                   | A summary of ACH volume and fees.                                                    |
| `instantPayments`                                                                    | [components.BillingSummaryDetails](../../models/components/billingsummarydetails.md) | :heavy_minus_sign:                                                                   | A summary of instant payment volume and fees.                                        |
| `platformFees`                                                                       | [components.AmountDecimal](../../models/components/amountdecimal.md)                 | :heavy_minus_sign:                                                                   | The total amount of platform fees.                                                   |
| `adjustmentFees`                                                                     | [components.AmountDecimal](../../models/components/amountdecimal.md)                 | :heavy_minus_sign:                                                                   | The total amount of adjustment fees.                                                 |
| `otherFees`                                                                          | [components.AmountDecimal](../../models/components/amountdecimal.md)                 | :heavy_minus_sign:                                                                   | The total amount of other fees.                                                      |
| `total`                                                                              | [components.AmountDecimal](../../models/components/amountdecimal.md)                 | :heavy_minus_sign:                                                                   | The total amount of all fees.                                                        |