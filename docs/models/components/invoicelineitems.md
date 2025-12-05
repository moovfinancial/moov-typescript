# InvoiceLineItems

A collection of line items for an invoice.

## Example Usage

```typescript
import { InvoiceLineItems } from "@moovio/sdk/models/components";

let value: InvoiceLineItems = {
  items: [
    {
      name: "<value>",
      basePrice: {
        currency: "USD",
        valueDecimal: "12.987654321",
      },
      quantity: 108714,
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
    },
  ],
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `items`                                                                    | [components.InvoiceLineItem](../../models/components/invoicelineitem.md)[] | :heavy_check_mark:                                                         | The list of line items.                                                    |