# UpdatePaymentLinkAmountDetails

## Example Usage

```typescript
import { UpdatePaymentLinkAmountDetails } from "@moovio/sdk/models/components";

let value: UpdatePaymentLinkAmountDetails = {
  tax: {
    currency: "USD",
    valueDecimal: "12.987654321",
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `tax`                                                                            | [components.AmountDecimalUpdate](../../models/components/amountdecimalupdate.md) | :heavy_minus_sign:                                                               | The amount of tax applied to the payment link.                                   |