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
      quantity: 68821,
      options: [
        {
          name: "<value>",
          quantity: 352438,
          priceModifier: {
            currency: "USD",
            valueDecimal: "12.987654321",
          },
          images: [
            {
              imageID: "35fb4515-aa19-4ecd-ab01-f93615e83ee4",
              link: "https://api.moov.io/images/q7lKWleAy9fUNhEGezQ1g",
              publicID: "<id>",
            },
          ],
        },
      ],
      images: [
        {
          imageID: "35fb4515-aa19-4ecd-ab01-f93615e83ee4",
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