# PaymentLinkLineItems

An optional collection of line items for a payment link.
When line items are provided, their total plus sales tax must equal the payment link amount.

## Example Usage

```typescript
import { PaymentLinkLineItems } from "@moovio/sdk/models/components";

let value: PaymentLinkLineItems = {
  items: [
    {
      name: "<value>",
      basePrice: {
        currency: "USD",
        valueDecimal: "12.987654321",
      },
      quantity: 696181,
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
              imageID: "8b33557e-9413-4327-8f48-150f83a62f57",
              link: "https://api.moov.io/images/q7lKWleAy9fUNhEGezQ1g",
              publicID: "<id>",
            },
          ],
        },
      ],
      images: [
        {
          imageID: "8b33557e-9413-4327-8f48-150f83a62f57",
          link: "https://api.moov.io/images/q7lKWleAy9fUNhEGezQ1g",
          publicID: "<id>",
        },
      ],
    },
  ],
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `items`                                                                            | [components.PaymentLinkLineItem](../../models/components/paymentlinklineitem.md)[] | :heavy_check_mark:                                                                 | The list of line items.                                                            |