# UpdatePaymentLinkAmountDetails

## Example Usage

```typescript
import { UpdatePaymentLinkAmountDetails } from "@moovio/sdk/models/components";

let value: UpdatePaymentLinkAmountDetails = {
  tax: {
    currency: "USD",
    valueDecimal: "12.987654321",
  },
  surcharge: null,
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `tax`                                                        | [components.Tax](../../models/components/tax.md)             | :heavy_minus_sign:                                           | The amount of tax applied to the payment link.               |
| `surcharge`                                                  | [components.Surcharge](../../models/components/surcharge.md) | :heavy_minus_sign:                                           | The amount of surcharge applied to the payment link.         |