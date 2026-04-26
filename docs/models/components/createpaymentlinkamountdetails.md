# CreatePaymentLinkAmountDetails

## Example Usage

```typescript
import { CreatePaymentLinkAmountDetails } from "@moovio/sdk/models/components";

let value: CreatePaymentLinkAmountDetails = {
  surcharge: {
    currency: "USD",
    valueDecimal: "12.987654321",
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `surcharge`                                                          | [components.AmountDecimal](../../models/components/amountdecimal.md) | :heavy_minus_sign:                                                   | The amount of surcharge applied to the payment link.                 |