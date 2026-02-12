# PaymentLinkLineItem

Represents a single line item in a payment link, including optional modifiers and quantity.

## Example Usage

```typescript
import { PaymentLinkLineItem } from "@moovio/sdk/models/components";

let value: PaymentLinkLineItem = {
  name: "<value>",
  basePrice: {
    currency: "USD",
    valueDecimal: "12.987654321",
  },
  quantity: 908135,
  options: [
    {
      name: "<value>",
      quantity: 678728,
      priceModifier: {
        currency: "USD",
        valueDecimal: "12.987654321",
      },
      images: [
        {
          imageID: "<id>",
          link: "https://api.moov.io/images/q7lKWleAy9fUNhEGezQ1g",
          publicID: "<id>",
        },
      ],
    },
  ],
  images: [
    {
      imageID: "<id>",
      link: "https://api.moov.io/images/q7lKWleAy9fUNhEGezQ1g",
      publicID: "<id>",
    },
  ],
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `name`                                                                                                       | *string*                                                                                                     | :heavy_check_mark:                                                                                           | The name of the item.                                                                                        |
| `basePrice`                                                                                                  | [components.AmountDecimal](../../models/components/amountdecimal.md)                                         | :heavy_check_mark:                                                                                           | The base price of the item before applying option modifiers.                                                 |
| `quantity`                                                                                                   | *number*                                                                                                     | :heavy_check_mark:                                                                                           | The quantity of this item.                                                                                   |
| `options`                                                                                                    | [components.PaymentLinkLineItemOption](../../models/components/paymentlinklineitemoption.md)[]               | :heavy_minus_sign:                                                                                           | Optional list of modifiers applied to this item (e.g., toppings, upgrades, customizations).                  |
| `images`                                                                                                     | [components.PaymentLinkLineItemImageMetadata](../../models/components/paymentlinklineitemimagemetadata.md)[] | :heavy_minus_sign:                                                                                           | Optional list of images associated with this line item.                                                      |
| `productID`                                                                                                  | *string*                                                                                                     | :heavy_minus_sign:                                                                                           | Optional unique identifier associating the line item with a product.                                         |