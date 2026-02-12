# RunTransfer

## Example Usage

```typescript
import { RunTransfer } from "@moovio/sdk/models/components";

let value: RunTransfer = {
  amount: {
    currency: "USD",
    value: 1204,
  },
  salesTaxAmount: {
    currency: "USD",
    value: 1204,
  },
  destination: {
    paymentMethodID: "c520f1b9-0ba7-42f5-b977-248cdbe41c69",
    achDetails: {
      companyEntryDescription: "Gym dues",
      originatingCompanyName: "Whole Body Fit",
    },
    cardDetails: {
      dynamicDescriptor: "WhlBdy *Yoga 11-12",
    },
  },
  partnerAccountID: "c520f1b9-0ba7-42f5-b977-248cdbe41c69",
  source: {
    paymentMethodID: "c520f1b9-0ba7-42f5-b977-248cdbe41c69",
    achDetails: {
      companyEntryDescription: "Gym dues",
      originatingCompanyName: "Whole Body Fit",
    },
    cardDetails: {
      dynamicDescriptor: "WhlBdy *Yoga 11-12",
    },
  },
  description: "bah vista and alert after against simplistic",
  lineItems: {
    items: [
      {
        name: "<value>",
        basePrice: {
          currency: "USD",
          valueDecimal: "12.987654321",
        },
        quantity: 721250,
        options: [
          {
            name: "<value>",
            quantity: 898379,
            priceModifier: {
              currency: "USD",
              valueDecimal: "12.987654321",
            },
            images: [
              {
                imageID: "<id>",
                link: "https://api.moov.io/images/q7lKWleAy9fUNhEGezQ1g",
                publicID: "<id>",
              },
            ],
          },
        ],
        images: [
          {
            imageID: "<id>",
            link: "https://api.moov.io/images/q7lKWleAy9fUNhEGezQ1g",
            publicID: "<id>",
          },
        ],
      },
    ],
  },
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    | Example                                                                                        |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `amount`                                                                                       | [components.Amount](../../models/components/amount.md)                                         | :heavy_check_mark:                                                                             | N/A                                                                                            |                                                                                                |
| `salesTaxAmount`                                                                               | [components.Amount](../../models/components/amount.md)                                         | :heavy_minus_sign:                                                                             | Optional sales tax amount. This amount is included in the total transfer amount.               |                                                                                                |
| `destination`                                                                                  | [components.SchedulePaymentMethod](../../models/components/schedulepaymentmethod.md)           | :heavy_check_mark:                                                                             | N/A                                                                                            |                                                                                                |
| `partnerAccountID`                                                                             | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            | c520f1b9-0ba7-42f5-b977-248cdbe41c69                                                           |
| `source`                                                                                       | [components.SchedulePaymentMethod](../../models/components/schedulepaymentmethod.md)           | :heavy_check_mark:                                                                             | N/A                                                                                            |                                                                                                |
| `description`                                                                                  | *string*                                                                                       | :heavy_check_mark:                                                                             | Simple description to place on the transfer.                                                   |                                                                                                |
| `lineItems`                                                                                    | [components.ScheduledTransferLineItems](../../models/components/scheduledtransferlineitems.md) | :heavy_minus_sign:                                                                             | Line items for a scheduled transfer.                                                           |                                                                                                |