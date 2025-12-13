# ScheduledTransferLineItem

Represents a single item in a scheduled transfer, including optional modifiers and quantity.

## Example Usage

```typescript
import { ScheduledTransferLineItem } from "@moovio/sdk/models/components";

let value: ScheduledTransferLineItem = {
  name: "<value>",
  basePrice: {
    currency: "USD",
    valueDecimal: "12.987654321",
  },
  quantity: 752334,
  options: [
    {
      name: "<value>",
      quantity: 556915,
      priceModifier: {
        currency: "USD",
        valueDecimal: "12.987654321",
      },
    },
  ],
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `name`                                                                                                     | *string*                                                                                                   | :heavy_check_mark:                                                                                         | The name of the item.                                                                                      |
| `basePrice`                                                                                                | [components.AmountDecimal](../../models/components/amountdecimal.md)                                       | :heavy_check_mark:                                                                                         | The base price of the item before applying option modifiers.                                               |
| `quantity`                                                                                                 | *number*                                                                                                   | :heavy_check_mark:                                                                                         | The quantity of this item.                                                                                 |
| `options`                                                                                                  | [components.ScheduledTransferLineItemOption](../../models/components/scheduledtransferlineitemoption.md)[] | :heavy_minus_sign:                                                                                         | Optional list of modifiers applied to this item (e.g., toppings, upgrades, customizations).                |
| `productID`                                                                                                | *string*                                                                                                   | :heavy_minus_sign:                                                                                         | Optional unique identifier associating the line item with a product.                                       |