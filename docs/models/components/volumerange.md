# VolumeRange

Defines the volume ranges for tiered pricing models.

## Example Usage

```typescript
import { VolumeRange } from "@moovio/sdk/models/components";

let value: VolumeRange = {
  fromValue: 970869,
  flatAmount: {
    currency: "USD",
    valueDecimal: "12.987654321",
  },
  perUnitAmount: {
    currency: "USD",
    valueDecimal: "12.987654321",
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `fromValue`                                                          | *number*                                                             | :heavy_check_mark:                                                   | Specifies the lower value of a tier for the fee.                     |
| `toValue`                                                            | *number*                                                             | :heavy_minus_sign:                                                   | Specifies the upper value of a tier for the fee.                     |
| `flatAmount`                                                         | [components.AmountDecimal](../../models/components/amountdecimal.md) | :heavy_check_mark:                                                   | The flat amount for a whole tier of the fee.                         |
| `perUnitAmount`                                                      | [components.AmountDecimal](../../models/components/amountdecimal.md) | :heavy_check_mark:                                                   | The unit price for a specific tier of the fee.                       |