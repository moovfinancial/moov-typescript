# CreateTransferLineItem

Represents a single item in a transfer, including optional modifiers and quantity.

## Example Usage

```typescript
import { CreateTransferLineItem } from "@moovio/sdk/models/components";

let value: CreateTransferLineItem = {
  name: "<value>",
  basePrice: {
    currency: "USD",
    valueDecimal: "12.987654321",
  },
  quantity: 969751,
  options: [
    {
      name: "<value>",
      quantity: 723210,
      priceModifier: {
        currency: "USD",
        valueDecimal: "12.987654321",
      },
    },
  ],
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `name`                                                                                               | *string*                                                                                             | :heavy_check_mark:                                                                                   | The name of the item.                                                                                |
| `basePrice`                                                                                          | [components.AmountDecimal](../../models/components/amountdecimal.md)                                 | :heavy_check_mark:                                                                                   | The base price of the item before applying option modifiers.                                         |
| `quantity`                                                                                           | *number*                                                                                             | :heavy_check_mark:                                                                                   | The quantity of this item.                                                                           |
| `options`                                                                                            | [components.CreateTransferLineItemOption](../../models/components/createtransferlineitemoption.md)[] | :heavy_minus_sign:                                                                                   | Optional list of modifiers applied to this item (e.g., toppings, upgrades, customizations).          |
| `imageIDs`                                                                                           | *string*[]                                                                                           | :heavy_minus_sign:                                                                                   | Optional list of images associated with this line item.                                              |
| `productID`                                                                                          | *string*                                                                                             | :heavy_minus_sign:                                                                                   | Optional unique identifier associating the line item with a product.                                 |