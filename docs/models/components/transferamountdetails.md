# TransferAmountDetails

## Example Usage

```typescript
import { TransferAmountDetails } from "@moovio/sdk/models/components";

let value: TransferAmountDetails = {
  tip: {
    currency: "USD",
    valueDecimal: "12.987654321",
  },
  tax: {
    currency: "USD",
    valueDecimal: "12.987654321",
  },
  surcharge: {
    currency: "USD",
    valueDecimal: "12.987654321",
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `tip`                                                                | [components.AmountDecimal](../../models/components/amountdecimal.md) | :heavy_minus_sign:                                                   | The amount of tip applied to the transfer.                           |
| `tax`                                                                | [components.AmountDecimal](../../models/components/amountdecimal.md) | :heavy_minus_sign:                                                   | The amount of tax applied to the transfer.                           |
| `surcharge`                                                          | [components.AmountDecimal](../../models/components/amountdecimal.md) | :heavy_minus_sign:                                                   | The amount of surcharge applied to the transfer.                     |