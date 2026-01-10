# CreateScheduledTransferLineItems

An optional collection of line items for a scheduled transfer.
When line items are provided their total must equal `amount` minus `salesTaxAmount`.

## Example Usage

```typescript
import { CreateScheduledTransferLineItems } from "@moovio/sdk/models/components";

let value: CreateScheduledTransferLineItems = {
  items: [
    {
      name: "<value>",
      basePrice: {
        currency: "USD",
        valueDecimal: "12.987654321",
      },
      quantity: 988494,
      options: [
        {
          name: "<value>",
          quantity: 556915,
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

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `items`                                                                                                    | [components.CreateScheduledTransferLineItem](../../models/components/createscheduledtransferlineitem.md)[] | :heavy_check_mark:                                                                                         | The list of line items.                                                                                    |