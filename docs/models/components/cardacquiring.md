# CardAcquiring

A summary of card acquiring volume and fees.

## Example Usage

```typescript
import { CardAcquiring } from "@moovio/sdk/models/components";

let value: CardAcquiring = {
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
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `volumeAmount`                                                                               | [components.AmountDecimal](../../models/components/amountdecimal.md)                         | :heavy_minus_sign:                                                                           | The total transaction volume amount.                                                         |
| `volumeCount`                                                                                | *number*                                                                                     | :heavy_minus_sign:                                                                           | The total number of transactions.                                                            |
| `feeAmount`                                                                                  | [components.AmountDecimal](../../models/components/amountdecimal.md)                         | :heavy_minus_sign:                                                                           | The total fee amount.                                                                        |
| `interchangeFees`                                                                            | [components.BillingSummaryInterchange](../../models/components/billingsummaryinterchange.md) | :heavy_minus_sign:                                                                           | A summary of interchange fees by card brand.                                                 |