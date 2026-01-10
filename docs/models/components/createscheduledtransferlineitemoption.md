# CreateScheduledTransferLineItemOption

Represents a modifier or option applied to a scheduled transfer line item.

## Example Usage

```typescript
import { CreateScheduledTransferLineItemOption } from "@moovio/sdk/models/components";

let value: CreateScheduledTransferLineItemOption = {
  name: "<value>",
  quantity: 744176,
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
| `imageIDs`                                                                              | *string*[]                                                                              | :heavy_minus_sign:                                                                      | Optional list of images associated with this line item.                                 |