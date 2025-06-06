# ScheduleListResponse

## Example Usage

```typescript
import { ScheduleListResponse } from "@moovio/sdk/models/components";

let value: ScheduleListResponse = {
  destinationAccountID: "c520f1b9-0ba7-42f5-b977-248cdbe41c69",
  mode: "production",
  occurrences: [
    {
      mode: "production",
      runOn: new Date("2023-12-07T16:58:18.357Z"),
      runTransfer: {
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
        description:
          "among supposing futon contrast or absolve geez haul unit deceivingly",
      },
    },
  ],
  ownerAccountID: "c520f1b9-0ba7-42f5-b977-248cdbe41c69",
  partnerAccountID: "c520f1b9-0ba7-42f5-b977-248cdbe41c69",
  recur: {
    recurrenceRule: "<value>",
    runTransfer: {
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
      description:
        "among supposing futon contrast or absolve geez haul unit deceivingly",
    },
    start: new Date("2009-11-10T23:00:00Z"),
  },
  scheduleID: "c520f1b9-0ba7-42f5-b977-248cdbe41c69",
  sourceAccountID: "c520f1b9-0ba7-42f5-b977-248cdbe41c69",
  createdOn: new Date("2024-11-23T03:17:08.711Z"),
  updatedOn: new Date("2025-12-17T01:57:11.800Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `description`                                                                                 | *string*                                                                                      | :heavy_minus_sign:                                                                            | Simple description to place on the transfer.                                                  |                                                                                               |
| `destinationAccountID`                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           | c520f1b9-0ba7-42f5-b977-248cdbe41c69                                                          |
| `mode`                                                                                        | [components.Mode](../../models/components/mode.md)                                            | :heavy_check_mark:                                                                            | The operating mode for an account.                                                            | production                                                                                    |
| `occurrences`                                                                                 | [components.OccurrencesResponse](../../models/components/occurrencesresponse.md)[]            | :heavy_minus_sign:                                                                            | N/A                                                                                           |                                                                                               |
| `ownerAccountID`                                                                              | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           | c520f1b9-0ba7-42f5-b977-248cdbe41c69                                                          |
| `partnerAccountID`                                                                            | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           | c520f1b9-0ba7-42f5-b977-248cdbe41c69                                                          |
| `recur`                                                                                       | [components.Recur](../../models/components/recur.md)                                          | :heavy_minus_sign:                                                                            | Defines configuration for recurring transfers.                                                |                                                                                               |
| `scheduleID`                                                                                  | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           | c520f1b9-0ba7-42f5-b977-248cdbe41c69                                                          |
| `sourceAccountID`                                                                             | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           | c520f1b9-0ba7-42f5-b977-248cdbe41c69                                                          |
| `createdOn`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `updatedOn`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `disabledOn`                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |                                                                                               |
| `sourceAccount`                                                                               | [components.PartialScheduleAccount](../../models/components/partialscheduleaccount.md)        | :heavy_minus_sign:                                                                            | N/A                                                                                           |                                                                                               |
| `destinationAccount`                                                                          | [components.PartialScheduleAccount](../../models/components/partialscheduleaccount.md)        | :heavy_minus_sign:                                                                            | N/A                                                                                           |                                                                                               |
| `partnerAccount`                                                                              | [components.PartialScheduleAccount](../../models/components/partialscheduleaccount.md)        | :heavy_minus_sign:                                                                            | N/A                                                                                           |                                                                                               |