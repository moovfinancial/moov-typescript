# UpdatePaymentLinkAmountDetails

## Example Usage

```typescript
import { UpdatePaymentLinkAmountDetails } from "@moovio/sdk/models/components";

let value: UpdatePaymentLinkAmountDetails = {
  surcharge: {
    currency: "USD",
    valueDecimal: "12.987654321",
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `surcharge`                                                                      | [components.AmountDecimalUpdate](../../models/components/amountdecimalupdate.md) | :heavy_minus_sign:                                                               | The amount of surcharge applied to the payment link.                             |