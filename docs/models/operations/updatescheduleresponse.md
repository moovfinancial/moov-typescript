# UpdateScheduleResponse

## Example Usage

```typescript
import { UpdateScheduleResponse } from "@moovio/sdk/models/operations";

let value: UpdateScheduleResponse = {
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
        runOn: new Date("2025-06-24T17:07:39.030Z"),
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
          description: "yet sniveling yuck confide",
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
        description: "only vacantly restfully boastfully toward upward",
      },
      start: new Date("2009-11-10T23:00:00Z"),
    },
    scheduleID: "c520f1b9-0ba7-42f5-b977-248cdbe41c69",
    sourceAccountID: "c520f1b9-0ba7-42f5-b977-248cdbe41c69",
    createdOn: new Date("2024-04-02T14:06:51.686Z"),
    updatedOn: new Date("2023-05-02T09:45:15.982Z"),
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `headers`                                                                  | Record<string, *string*[]>                                                 | :heavy_check_mark:                                                         | N/A                                                                        |
| `result`                                                                   | [components.ScheduleResponse](../../models/components/scheduleresponse.md) | :heavy_check_mark:                                                         | N/A                                                                        |