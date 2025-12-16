# BillingSummary

A summary of all fees included in a statement.

## Example Usage

```typescript
import { BillingSummary } from "@moovio/sdk/models/components";

let value: BillingSummary = {
  cardAcquiring: {
    feeAmount: {
      currency: "USD",
      valueDecimal: "12.987654321",
    },
    merchantFeesCollected: {
      currency: "USD",
      valueDecimal: "12.987654321",
    },
    partnerFeesAssessed: {
      currency: "USD",
      valueDecimal: "12.987654321",
    },
    netIncome: {
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
    feeAmount: {
      currency: "USD",
      valueDecimal: "12.987654321",
    },
    merchantFeesCollected: {
      currency: "USD",
      valueDecimal: "12.987654321",
    },
    partnerFeesAssessed: {
      currency: "USD",
      valueDecimal: "12.987654321",
    },
    netIncome: {
      currency: "USD",
      valueDecimal: "12.987654321",
    },
  },
  instantPayments: {
    feeAmount: {
      currency: "USD",
      valueDecimal: "12.987654321",
    },
    merchantFeesCollected: {
      currency: "USD",
      valueDecimal: "12.987654321",
    },
    partnerFeesAssessed: {
      currency: "USD",
      valueDecimal: "12.987654321",
    },
    netIncome: {
      currency: "USD",
      valueDecimal: "12.987654321",
    },
  },
  accountFees: {
    feeAmount: {
      currency: "USD",
      valueDecimal: "12.987654321",
    },
    merchantFeesCollected: {
      currency: "USD",
      valueDecimal: "12.987654321",
    },
    partnerFeesAssessed: {
      currency: "USD",
      valueDecimal: "12.987654321",
    },
    netIncome: {
      currency: "USD",
      valueDecimal: "12.987654321",
    },
  },
  otherCardFees: {
    feeAmount: {
      currency: "USD",
      valueDecimal: "12.987654321",
    },
    merchantFeesCollected: {
      currency: "USD",
      valueDecimal: "12.987654321",
    },
    partnerFeesAssessed: {
      currency: "USD",
      valueDecimal: "12.987654321",
    },
    netIncome: {
      currency: "USD",
      valueDecimal: "12.987654321",
    },
  },
  total: {
    currency: "USD",
    valueDecimal: "12.987654321",
  },
  netIncomeSubtotal: {
    feeAmount: {
      currency: "USD",
      valueDecimal: "12.987654321",
    },
    merchantFeesCollected: {
      currency: "USD",
      valueDecimal: "12.987654321",
    },
    partnerFeesAssessed: {
      currency: "USD",
      valueDecimal: "12.987654321",
    },
    netIncome: {
      currency: "USD",
      valueDecimal: "12.987654321",
    },
  },
  residualSubtotal: {
    currency: "USD",
    valueDecimal: "12.987654321",
  },
  monthlyPartnerCosts: {
    minimumCommitment: {
      currency: "USD",
      valueDecimal: "12.987654321",
    },
    monthlyPlatform: {
      currency: "USD",
      valueDecimal: "12.987654321",
    },
    total: {
      currency: "USD",
      valueDecimal: "12.987654321",
    },
  },
  netPartnerPayment: {
    currency: "USD",
    valueDecimal: "12.987654321",
  },
};
```

## Fields

| Field                                                                                                                                                                                                                                                      | Type                                                                                                                                                                                                                                                       | Required                                                                                                                                                                                                                                                   | Description                                                                                                                                                                                                                                                |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `cardAcquiring`                                                                                                                                                                                                                                            | [components.CardAcquiring](../../models/components/cardacquiring.md)                                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                                                                                                         | A summary of card acquiring fees.                                                                                                                                                                                                                          |
| `ach`                                                                                                                                                                                                                                                      | [components.BillingSummaryDetails](../../models/components/billingsummarydetails.md)                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                                                                                                         | A summary of ACH fees.                                                                                                                                                                                                                                     |
| `instantPayments`                                                                                                                                                                                                                                          | [components.BillingSummaryDetails](../../models/components/billingsummarydetails.md)                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                                                                                                         | A summary of instant payment fees.                                                                                                                                                                                                                         |
| ~~`platformFees`~~                                                                                                                                                                                                                                         | [components.BillingSummaryPlatformFees](../../models/components/billingsummaryplatformfees.md)                                                                                                                                                             | :heavy_minus_sign:                                                                                                                                                                                                                                         | : warning: ** DEPRECATED **: This will be removed in a future release, please migrate away from it as soon as possible.<br/><br/>The total amount of platform fees. This field is deprecated and will be removed in a future release. Use summary.accountFees. |
| `accountFees`                                                                                                                                                                                                                                              | [components.BillingSummaryDetails](../../models/components/billingsummarydetails.md)                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                                                                                                         | A summary of account fees.                                                                                                                                                                                                                                 |
| ~~`adjustmentFees`~~                                                                                                                                                                                                                                       | [components.AdjustmentFees](../../models/components/adjustmentfees.md)                                                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                                                                                                                         | : warning: ** DEPRECATED **: This will be removed in a future release, please migrate away from it as soon as possible.<br/><br/>The total amount of adjustment fees. This field is deprecated and will be removed in a future release.                    |
| ~~`otherFees`~~                                                                                                                                                                                                                                            | [components.OtherFees](../../models/components/otherfees.md)                                                                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                                                                                                         | : warning: ** DEPRECATED **: This will be removed in a future release, please migrate away from it as soon as possible.<br/><br/>The total amount of other card fees. This field is deprecated and will be removed in a future release. Use summary.otherCardFees. |
| `otherCardFees`                                                                                                                                                                                                                                            | [components.BillingSummaryDetails](../../models/components/billingsummarydetails.md)                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                                                                                                         | A summary of other card fees.                                                                                                                                                                                                                              |
| `total`                                                                                                                                                                                                                                                    | [components.AmountDecimal](../../models/components/amountdecimal.md)                                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                                                                                                         | The total amount of all fees.                                                                                                                                                                                                                              |
| `netIncomeSubtotal`                                                                                                                                                                                                                                        | [components.BillingSummaryDetails](../../models/components/billingsummarydetails.md)                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                                                                                                         | Total net revenue after deducting total partner fees.                                                                                                                                                                                                      |
| `revenueShare`                                                                                                                                                                                                                                             | *string*                                                                                                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                                                                                         | Partner’s share of the net income, expressed as a percentage.                                                                                                                                                                                              |
| `residualSubtotal`                                                                                                                                                                                                                                         | [components.AmountDecimal](../../models/components/amountdecimal.md)                                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                                                                                                         | The portion of net income allocated to the partner before monthly partner costs.                                                                                                                                                                           |
| `monthlyPartnerCosts`                                                                                                                                                                                                                                      | [components.PartnerFees](../../models/components/partnerfees.md)                                                                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                                                                                                         | Monthly partner costs that are charged separately and not included in residual subtotal (e.g. platform fees, minimums).                                                                                                                                    |
| `netPartnerPayment`                                                                                                                                                                                                                                        | [components.AmountDecimal](../../models/components/amountdecimal.md)                                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                                                                                                         | Final partner payment after deducting monthlyPartnerCosts.                                                                                                                                                                                                 |