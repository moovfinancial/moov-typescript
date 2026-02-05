# InvoiceLineItem

Represents a single item in an invoice, including optional modifiers and quantity.

## Example Usage

```typescript
import { InvoiceLineItem } from "@moovio/sdk/models/components";

let value: InvoiceLineItem = {
  name: "<value>",
  basePrice: {
    currency: "USD",
    valueDecimal: "12.987654321",
  },
  quantity: 796379,
  options: [
    {
      name: "<value>",
      quantity: 163512,
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

| Field                                                                                                                                                                      | Type                                                                                                                                                                       | Required                                                                                                                                                                   | Description                                                                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `name`                                                                                                                                                                     | *string*                                                                                                                                                                   | :heavy_check_mark:                                                                                                                                                         | The name of the item.                                                                                                                                                      |
| `basePrice`                                                                                                                                                                | [components.AmountDecimal](../../models/components/amountdecimal.md)                                                                                                       | :heavy_check_mark:                                                                                                                                                         | The base price of the item before applying option modifiers.                                                                                                               |
| `quantity`                                                                                                                                                                 | *number*                                                                                                                                                                   | :heavy_check_mark:                                                                                                                                                         | The quantity of this item.                                                                                                                                                 |
| `productID`                                                                                                                                                                | *string*                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                         |   Optional unique identifier associating the line item with a product.<br/>  This is for reporting or tracking purposes, and does not populate other details of the line item. |
| `options`                                                                                                                                                                  | [components.InvoiceLineItemOption](../../models/components/invoicelineitemoption.md)[]                                                                                     | :heavy_minus_sign:                                                                                                                                                         | Optional list of modifiers applied to this item (e.g., toppings, upgrades, customizations).                                                                                |
| `images`                                                                                                                                                                   | [components.InvoiceLineItemImageMetadata](../../models/components/invoicelineitemimagemetadata.md)[]                                                                       | :heavy_minus_sign:                                                                                                                                                         | Optional list of images associated with this line item.                                                                                                                    |