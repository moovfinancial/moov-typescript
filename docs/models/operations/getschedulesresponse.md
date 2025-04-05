# GetSchedulesResponse

## Example Usage

```typescript
import { GetSchedulesResponse } from "@moovio/sdk/models/operations";

let value: GetSchedulesResponse = {
  headers: {
    "key": [
      "<value>",
    ],
  },
  result: {
    destinationAccountID: "c520f1b9-0ba7-42f5-b977-248cdbe41c69",
    mode: "production",
    occurrences: [
      {
        mode: "production",
        runOn: new Date("2024-07-25T13:57:58.199Z"),
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
          description: "cleverly um yippee incomplete vicinity",
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
        description: "well-groomed cruel promptly ouch",
      },
      start: new Date("2009-11-10T23:00:00Z"),
    },
    scheduleID: "c520f1b9-0ba7-42f5-b977-248cdbe41c69",
    sourceAccountID: "c520f1b9-0ba7-42f5-b977-248cdbe41c69",
    createdOn: new Date("2024-04-04T01:59:55.557Z"),
    updatedOn: new Date("2023-07-17T09:39:28.600Z"),
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `headers`                                                                  | Record<string, *string*[]>                                                 | :heavy_check_mark:                                                         | N/A                                                                        |
| `result`                                                                   | [components.ScheduleResponse](../../models/components/scheduleresponse.md) | :heavy_check_mark:                                                         | N/A                                                                        |