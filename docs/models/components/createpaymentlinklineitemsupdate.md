# CreatePaymentLinkLineItemsUpdate

An optional collection of line items for a payment link.
When line items are provided, their total plus sales tax must equal the payment link amount.

## Example Usage

```typescript
import { CreatePaymentLinkLineItemsUpdate } from "@moovio/sdk/models/components";

let value: CreatePaymentLinkLineItemsUpdate = {
  items: [
    {
      name: "<value>",
      basePrice: {
        currency: "USD",
        valueDecimal: "12.987654321",
      },
      quantity: 567879,
      options: [
        {
          name: "<value>",
          quantity: 549588,
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

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `items`                                                                                        | [components.CreatePaymentLinkLineItem](../../models/components/createpaymentlinklineitem.md)[] | :heavy_minus_sign:                                                                             | The list of line items.                                                                        |