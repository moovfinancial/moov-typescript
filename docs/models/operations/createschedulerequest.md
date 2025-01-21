# CreateScheduleRequest

## Example Usage

```typescript
import { CreateScheduleRequest } from "moov-sdk/models/operations";

let value: CreateScheduleRequest = {
  accountID: "3240a5f1-e71d-41a3-979e-463528893600",
  upsertSchedule: {
    occurrences: [
      {
        occurrenceID: "c520f1b9-0ba7-42f5-b977-248cdbe41c69",
        runOn: new Date("2009-11-10T23:00:00Z"),
        runTransfer: {
          amount: {
            currency: "Kip",
            value: 692974,
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
            "obediently yahoo remark although fooey upright qualified gah whoever",
        },
      },
    ],
    recur: {
      recurrenceRule: "<value>",
      runTransfer: {
        amount: {
          currency: "Guarani",
          value: 340087,
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
        description: "ack hm gadzooks between sanity",
      },
      start: new Date("2009-11-10T23:00:00Z"),
    },
  },
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `xMoovVersion`                                                         | [components.Versions](../../models/components/versions.md)             | :heavy_minus_sign:                                                     | Specify an API version.                                                |
| `accountID`                                                            | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `upsertSchedule`                                                       | [components.UpsertSchedule](../../models/components/upsertschedule.md) | :heavy_check_mark:                                                     | N/A                                                                    |