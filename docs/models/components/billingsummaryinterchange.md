# BillingSummaryInterchange

A summary of interchange fees by card brand.

## Example Usage

```typescript
import { BillingSummaryInterchange } from "@moovio/sdk/models/components";

let value: BillingSummaryInterchange = {
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
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `visa`                                                               | [components.AmountDecimal](../../models/components/amountdecimal.md) | :heavy_check_mark:                                                   | Total interchange fees for Visa.                                     |
| `mastercard`                                                         | [components.AmountDecimal](../../models/components/amountdecimal.md) | :heavy_check_mark:                                                   | Total interchange fees for Mastercard.                               |
| `discover`                                                           | [components.AmountDecimal](../../models/components/amountdecimal.md) | :heavy_check_mark:                                                   | Total interchange fees for Discover.                                 |
| `americanExpress`                                                    | [components.AmountDecimal](../../models/components/amountdecimal.md) | :heavy_check_mark:                                                   | Total interchange fees for American Express.                         |