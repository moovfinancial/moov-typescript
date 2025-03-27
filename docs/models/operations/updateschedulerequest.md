# UpdateScheduleRequest

## Example Usage

```typescript
import { UpdateScheduleRequest } from "@moovio/sdk/models/operations";

let value: UpdateScheduleRequest = {
  accountID: "5d759654-5ef1-4baa-804b-708dee873dcd",
  scheduleID: "1bee8a14-8e79-40f7-9258-23ed14a40b35",
  upsertSchedule: {
    occurrences: [
      {
        occurrenceID: "c520f1b9-0ba7-42f5-b977-248cdbe41c69",
        runOn: new Date("2009-11-10T23:00:00Z"),
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
          description: "beyond simple into sympathetically",
        },
      },
    ],
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
        description: "drat tighten but frightened following",
      },
      start: new Date("2009-11-10T23:00:00Z"),
    },
  },
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `accountID`                                                            | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `scheduleID`                                                           | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `upsertSchedule`                                                       | [components.UpsertSchedule](../../models/components/upsertschedule.md) | :heavy_check_mark:                                                     | N/A                                                                    |