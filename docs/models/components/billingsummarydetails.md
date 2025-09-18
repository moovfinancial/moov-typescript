# BillingSummaryDetails

Details of volume and fees for a specific payment method.

## Example Usage

```typescript
import { BillingSummaryDetails } from "@moovio/sdk/models/components";

let value: BillingSummaryDetails = {
  volumeAmount: {
    currency: "USD",
    valueDecimal: "12.987654321",
  },
  feeAmount: {
    currency: "USD",
    valueDecimal: "12.987654321",
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `volumeAmount`                                                       | [components.AmountDecimal](../../models/components/amountdecimal.md) | :heavy_minus_sign:                                                   | The total transaction volume amount.                                 |
| `volumeCount`                                                        | *number*                                                             | :heavy_minus_sign:                                                   | The total number of transactions.                                    |
| `feeAmount`                                                          | [components.AmountDecimal](../../models/components/amountdecimal.md) | :heavy_minus_sign:                                                   | The total fee amount.                                                |