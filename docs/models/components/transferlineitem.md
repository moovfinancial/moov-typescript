# TransferLineItem

Represents a single item in a transfer, including optional modifiers and quantity.

## Example Usage

```typescript
import { TransferLineItem } from "@moovio/sdk/models/components";

let value: TransferLineItem = {
  name: "<value>",
  basePrice: {
    currency: "USD",
    valueDecimal: "12.987654321",
  },
  quantity: 691714,
  options: [
    {
      name: "<value>",
      quantity: 622986,
      priceModifier: {
        currency: "USD",
        valueDecimal: "12.987654321",
      },
      images: [
        {
          imageID: "44707590-7b30-46e6-a6ce-36785ccee925",
          link: "https://api.moov.io/images/q7lKWleAy9fUNhEGezQ1g",
          publicID: "<id>",
        },
      ],
    },
  ],
  images: [
    {
      imageID: "44707590-7b30-46e6-a6ce-36785ccee925",
      link: "https://api.moov.io/images/q7lKWleAy9fUNhEGezQ1g",
      publicID: "<id>",
    },
  ],
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `name`                                                                                                 | *string*                                                                                               | :heavy_check_mark:                                                                                     | The name of the item.                                                                                  |
| `basePrice`                                                                                            | [components.AmountDecimal](../../models/components/amountdecimal.md)                                   | :heavy_check_mark:                                                                                     | The base price of the item before applying option modifiers.                                           |
| `quantity`                                                                                             | *number*                                                                                               | :heavy_check_mark:                                                                                     | The quantity of this item.                                                                             |
| `options`                                                                                              | [components.TransferLineItemOption](../../models/components/transferlineitemoption.md)[]               | :heavy_minus_sign:                                                                                     | Optional list of modifiers applied to this item (e.g., toppings, upgrades, customizations).            |
| `images`                                                                                               | [components.TransferLineItemImageMetadata](../../models/components/transferlineitemimagemetadata.md)[] | :heavy_minus_sign:                                                                                     | Optional list of images associated with this line item.                                                |
| `productID`                                                                                            | *string*                                                                                               | :heavy_minus_sign:                                                                                     | Optional unique identifier associating the line item with a product.                                   |