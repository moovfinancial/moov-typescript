# CreateInvoiceLineItem

Represents a single item in an invoice, including optional modifiers and quantity.

## Example Usage

```typescript
import { CreateInvoiceLineItem } from "@moovio/sdk/models/components";

let value: CreateInvoiceLineItem = {
  name: "<value>",
  basePrice: {
    currency: "USD",
    valueDecimal: "12.987654321",
  },
  quantity: 284816,
  options: [
    {
      name: "<value>",
      quantity: 337766,
      priceModifier: {
        currency: "USD",
        valueDecimal: "12.987654321",
      },
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
| `options`                                                                                                                                                                  | [components.CreateInvoiceLineItemOption](../../models/components/createinvoicelineitemoption.md)[]                                                                         | :heavy_minus_sign:                                                                                                                                                         | Optional list of modifiers applied to this item (e.g., toppings, upgrades, customizations).                                                                                |