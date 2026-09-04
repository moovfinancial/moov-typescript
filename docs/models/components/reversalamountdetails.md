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

| Field                                                                                                                                                                  | Type                                                                                                                                                                   | Required                                                                                                                                                               | Description                                                                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `surcharge`                                                                                                                                                            | [components.AmountDecimal](../../models/components/amountdecimal.md)                                                                                                   | :heavy_minus_sign:                                                                                                                                                     | The amount of surcharge to refund.<br/>It should be proportional to the surcharge on the original transfer.<br/>This field applies only when the reversal results in a refund. |