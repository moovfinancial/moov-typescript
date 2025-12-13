# CardAcquiring

A summary of card acquiring fees.

## Example Usage

```typescript
import { CardAcquiring } from "@moovio/sdk/models/components";

let value: CardAcquiring = {
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
};
```

## Fields

| Field                                                                                                                                                                                                                           | Type                                                                                                                                                                                                                            | Required                                                                                                                                                                                                                        | Description                                                                                                                                                                                                                     |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ~~`volumeAmount`~~                                                                                                                                                                                                              | [components.BillingSummaryVolumeAmount](../../models/components/billingsummaryvolumeamount.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                                                                              | : warning: ** DEPRECATED **: This will be removed in a future release, please migrate away from it as soon as possible.<br/><br/>The total transaction volume amount. This field is deprecated and will be removed in a future release. |
| ~~`volumeCount`~~                                                                                                                                                                                                               | *number*                                                                                                                                                                                                                        | :heavy_minus_sign:                                                                                                                                                                                                              | : warning: ** DEPRECATED **: This will be removed in a future release, please migrate away from it as soon as possible.<br/><br/>The total number of transactions. This field is deprecated and will be removed in a future release. |
| `feeAmount`                                                                                                                                                                                                                     | [components.AmountDecimal](../../models/components/amountdecimal.md)                                                                                                                                                            | :heavy_minus_sign:                                                                                                                                                                                                              | The total fee amount.                                                                                                                                                                                                           |
| `merchantFeesCollected`                                                                                                                                                                                                         | [components.AmountDecimal](../../models/components/amountdecimal.md)                                                                                                                                                            | :heavy_minus_sign:                                                                                                                                                                                                              | Total fee revenue collected from merchants.                                                                                                                                                                                     |
| `partnerFeesAssessed`                                                                                                                                                                                                           | [components.AmountDecimal](../../models/components/amountdecimal.md)                                                                                                                                                            | :heavy_minus_sign:                                                                                                                                                                                                              | Total fee costs incurred by the partner.                                                                                                                                                                                        |
| `netIncome`                                                                                                                                                                                                                     | [components.AmountDecimal](../../models/components/amountdecimal.md)                                                                                                                                                            | :heavy_minus_sign:                                                                                                                                                                                                              | Net revenue after deducting partner fee costs.                                                                                                                                                                                  |
| `interchangeFees`                                                                                                                                                                                                               | [components.BillingSummaryInterchange](../../models/components/billingsummaryinterchange.md)                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                                                                              | A summary of interchange fees by card brand.                                                                                                                                                                                    |