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
      quantity: 877349,
      options: [
        {
          name: "<value>",
          quantity: 588981,
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

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `items`                                                                    | [components.InvoiceLineItem](../../models/components/invoicelineitem.md)[] | :heavy_check_mark:                                                         | The list of line items.                                                    |