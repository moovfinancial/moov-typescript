# CreateRunTransfer

Defines the attributes of a transfer.

## Example Usage

```typescript
import { CreateRunTransfer } from "@moovio/sdk/models/components";

let value: CreateRunTransfer = {
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
  description: "gaseous attest diagram without muddy triumphantly",
  lineItems: {
    items: [
      {
        name: "<value>",
        basePrice: {
          currency: "USD",
          valueDecimal: "12.987654321",
        },
        quantity: 974634,
        options: [
          {
            name: "<value>",
            quantity: 907065,
            priceModifier: {
              currency: "USD",
              valueDecimal: "12.987654321",
            },
          },
        ],
      },
    ],
  },
};
```

## Fields

| Field                                                                                                                                               | Type                                                                                                                                                | Required                                                                                                                                            | Description                                                                                                                                         | Example                                                                                                                                             |
| --------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| `amount`                                                                                                                                            | [components.Amount](../../models/components/amount.md)                                                                                              | :heavy_check_mark:                                                                                                                                  | N/A                                                                                                                                                 |                                                                                                                                                     |
| `salesTaxAmount`                                                                                                                                    | [components.Amount](../../models/components/amount.md)                                                                                              | :heavy_minus_sign:                                                                                                                                  | Optional sales tax amount. This amount is included in the total transfer amount.                                                                    |                                                                                                                                                     |
| `destination`                                                                                                                                       | [components.SchedulePaymentMethod](../../models/components/schedulepaymentmethod.md)                                                                | :heavy_check_mark:                                                                                                                                  | N/A                                                                                                                                                 |                                                                                                                                                     |
| `partnerAccountID`                                                                                                                                  | *string*                                                                                                                                            | :heavy_check_mark:                                                                                                                                  | N/A                                                                                                                                                 | c520f1b9-0ba7-42f5-b977-248cdbe41c69                                                                                                                |
| `source`                                                                                                                                            | [components.SchedulePaymentMethod](../../models/components/schedulepaymentmethod.md)                                                                | :heavy_check_mark:                                                                                                                                  | N/A                                                                                                                                                 |                                                                                                                                                     |
| `description`                                                                                                                                       | *string*                                                                                                                                            | :heavy_check_mark:                                                                                                                                  | Simple description to place on the transfer.                                                                                                        |                                                                                                                                                     |
| `lineItems`                                                                                                                                         | [components.CreateScheduledTransferLineItems](../../models/components/createscheduledtransferlineitems.md)                                          | :heavy_minus_sign:                                                                                                                                  | An optional collection of line items for a scheduled transfer.<br/>When line items are provided their total must equal `amount` minus `salesTaxAmount`. |                                                                                                                                                     |