# UpsertSchedule

## Example Usage

```typescript
import { UpsertSchedule } from "@moovio/sdk/models/components";

let value: UpsertSchedule = {
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
          "aboard positively whether unexpectedly longingly menacing hence worth",
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
      description:
        "inscribe ajar subtle zowie gallivant suddenly inwardly edge",
    },
    start: new Date("2009-11-10T23:00:00Z"),
  },
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `description`                                                    | *string*                                                         | :heavy_minus_sign:                                               | Simple description of what the schedule is.                      |
| `occurrences`                                                    | [components.Occurrence](../../models/components/occurrence.md)[] | :heavy_minus_sign:                                               | N/A                                                              |
| `recur`                                                          | [components.Recur](../../models/components/recur.md)             | :heavy_minus_sign:                                               | Defines configuration for recurring transfers.                   |