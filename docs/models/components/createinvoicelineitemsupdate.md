# CreateInvoiceLineItemsUpdate

A collection of line items for an invoice.

## Example Usage

```typescript
import { CreateInvoiceLineItemsUpdate } from "@moovio/sdk/models/components";

let value: CreateInvoiceLineItemsUpdate = {
  items: [
    {
      name: "<value>",
      basePrice: {
        currency: "USD",
        valueDecimal: "12.987654321",
      },
      quantity: 673710,
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
    },
  ],
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `items`                                                                                | [components.CreateInvoiceLineItem](../../models/components/createinvoicelineitem.md)[] | :heavy_minus_sign:                                                                     | The list of line items.                                                                |