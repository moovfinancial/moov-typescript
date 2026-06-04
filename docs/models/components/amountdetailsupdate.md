# AmountDetailsUpdate

## Example Usage

```typescript
import { AmountDetailsUpdate } from "@moovio/sdk/models/components";

let value: AmountDetailsUpdate = {
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

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `tax`                                                                            | [components.AmountDecimalUpdate](../../models/components/amountdecimalupdate.md) | :heavy_minus_sign:                                                               | The amount of tax applied to the invoice.                                        |
| `surcharge`                                                                      | [components.AmountDecimalUpdate](../../models/components/amountdecimalupdate.md) | :heavy_minus_sign:                                                               | The amount of surcharge applied to the invoice.                                  |