# RunTransfer

Defines the attributes of a transfer.

## Example Usage

```typescript
import { RunTransfer } from "@moovio/sdk/models/components";

let value: RunTransfer = {
  amount: {
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
  description: "cemetery aha courteous scaly on during",
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          | Example                                                                              |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `amount`                                                                             | [components.Amount](../../models/components/amount.md)                               | :heavy_check_mark:                                                                   | N/A                                                                                  |                                                                                      |
| `destination`                                                                        | [components.SchedulePaymentMethod](../../models/components/schedulepaymentmethod.md) | :heavy_check_mark:                                                                   | N/A                                                                                  |                                                                                      |
| `partnerAccountID`                                                                   | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  | c520f1b9-0ba7-42f5-b977-248cdbe41c69                                                 |
| `source`                                                                             | [components.SchedulePaymentMethod](../../models/components/schedulepaymentmethod.md) | :heavy_check_mark:                                                                   | N/A                                                                                  |                                                                                      |
| `description`                                                                        | *string*                                                                             | :heavy_check_mark:                                                                   | Simple description to place on the transfer.                                         |                                                                                      |