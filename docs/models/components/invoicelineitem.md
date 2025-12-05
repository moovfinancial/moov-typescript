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
      quantity: 11853,
      priceModifier: {
        currency: "USD",
        valueDecimal: "12.987654321",
      },
    },
  ],
  images: [
    {
      imageID: "4925642d-ae6d-43c8-bb16-aa953186a0b9",
      link: "https://api.moov.io/images/q7lKWleAy9fUNhEGezQ1g",
      publicID: "<id>",
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
| `productID`                                                                                          | *string*                                                                                             | :heavy_minus_sign:                                                                                   | Optional unique identifier associating the line item with a product.                                 |
| `options`                                                                                            | [components.InvoiceLineItemOption](../../models/components/invoicelineitemoption.md)[]               | :heavy_minus_sign:                                                                                   | Optional list of modifiers applied to this item (e.g., toppings, upgrades, customizations).          |
| `images`                                                                                             | [components.InvoiceLineItemImageMetadata](../../models/components/invoicelineitemimagemetadata.md)[] | :heavy_minus_sign:                                                                                   | Optional list of images associated with this line item.                                              |