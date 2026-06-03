# AmountDetails

## Example Usage

```typescript
import { AmountDetails } from "@moovio/sdk/models/components";

let value: AmountDetails = {
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
| `tax`                                                                | [components.AmountDecimal](../../models/components/amountdecimal.md) | :heavy_minus_sign:                                                   | The amount of tax applied to the invoice.                            |
| `surcharge`                                                          | [components.AmountDecimal](../../models/components/amountdecimal.md) | :heavy_minus_sign:                                                   | The amount of surcharge applied to the invoice.                      |