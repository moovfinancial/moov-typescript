# TransferLineItemOption

Represents a modifier or option applied to a line item.

## Example Usage

```typescript
import { TransferLineItemOption } from "@moovio/sdk/models/components";

let value: TransferLineItemOption = {
  name: "<value>",
  quantity: 443965,
  priceModifier: {
    currency: "USD",
    valueDecimal: "12.987654321",
  },
};
```

## Fields

| Field                                                                                   | Type                                                                                    | Required                                                                                | Description                                                                             |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `name`                                                                                  | *string*                                                                                | :heavy_check_mark:                                                                      | The name of the option or modifier.                                                     |
| `quantity`                                                                              | *number*                                                                                | :heavy_check_mark:                                                                      | The quantity of this option.                                                            |
| `priceModifier`                                                                         | [components.AmountDecimal](../../models/components/amountdecimal.md)                    | :heavy_minus_sign:                                                                      | Optional price modification applied by this option. Can be positive, negative, or zero. |
| `group`                                                                                 | *string*                                                                                | :heavy_minus_sign:                                                                      | Optional group identifier to categorize related options (e.g., 'toppings').             |