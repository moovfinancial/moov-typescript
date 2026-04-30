# RefundAmountDetails

## Example Usage

```typescript
import { RefundAmountDetails } from "@moovio/sdk/models/components";

let value: RefundAmountDetails = {
  surcharge: {
    currency: "USD",
    valueDecimal: "12.987654321",
  },
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `surcharge`                                                                                          | [components.AmountDecimal](../../models/components/amountdecimal.md)                                 | :heavy_minus_sign:                                                                                   | The amount of surcharge to refund. Should be proportionate to the surcharge on the original transfer |