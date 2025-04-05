# CreateScheduleRequest

## Example Usage

```typescript
import { CreateScheduleRequest } from "@moovio/sdk/models/operations";

let value: CreateScheduleRequest = {
  accountID: "32fdd1a4-cbce-4d16-b063-82ef1d27155c",
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
          description:
            "among supposing futon contrast or absolve geez haul unit deceivingly",
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
        description: "spork onto shrill boohoo actually gah gradient scotch by",
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
| `upsertSchedule`                                                       | [components.UpsertSchedule](../../models/components/upsertschedule.md) | :heavy_check_mark:                                                     | N/A                                                                    |