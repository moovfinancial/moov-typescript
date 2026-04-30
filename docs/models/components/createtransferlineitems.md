# CreateTransferLineItems

An optional collection of line items for a transfer.
When line items are provided, their total plus sales tax must equal the transfer amount.

## Example Usage

```typescript
import { CreateTransferLineItems } from "@moovio/sdk/models/components";

let value: CreateTransferLineItems = {
  items: [
    {
      name: "<value>",
      basePrice: {
        currency: "USD",
        valueDecimal: "12.987654321",
      },
      quantity: 558173,
      options: [
        {
          name: "<value>",
          quantity: 723210,
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

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `items`                                                                                  | [components.CreateTransferLineItem](../../models/components/createtransferlineitem.md)[] | :heavy_check_mark:                                                                       | The list of line items.                                                                  |