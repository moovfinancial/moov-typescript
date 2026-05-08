# ReversalAmountDetails

## Example Usage

```typescript
import { ReversalAmountDetails } from "@moovio/sdk/models/components";

let value: ReversalAmountDetails = {
  surcharge: {
    currency: "USD",
    valueDecimal: "12.987654321",
  },
};
```

## Fields

| Field                                                                                                                                                                                    | Type                                                                                                                                                                                     | Required                                                                                                                                                                                 | Description                                                                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `surcharge`                                                                                                                                                                              | [components.AmountDecimal](../../models/components/amountdecimal.md)                                                                                                                     | :heavy_minus_sign:                                                                                                                                                                       | The amount of surcharge to refund. Should be proportionate to the surcharge on the original transfer. This does not reply if the reversal resulted in a cancellation instead of a refund |