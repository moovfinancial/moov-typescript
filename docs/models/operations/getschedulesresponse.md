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
        runOn: new Date("2025-01-05T16:42:23.865Z"),
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
            "telescope woot shallow ready likely rare bog versus mmm",
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
          "mmm indeed but exacerbate accessorise jealously enlightened",
      },
      start: new Date("2009-11-10T23:00:00Z"),
    },
    scheduleID: "c520f1b9-0ba7-42f5-b977-248cdbe41c69",
    sourceAccountID: "c520f1b9-0ba7-42f5-b977-248cdbe41c69",
    createdOn: new Date("2025-06-16T21:49:42.992Z"),
    updatedOn: new Date("2024-04-05T21:31:12.539Z"),
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `headers`                                                                  | Record<string, *string*[]>                                                 | :heavy_check_mark:                                                         | N/A                                                                        |
| `result`                                                                   | [components.ScheduleResponse](../../models/components/scheduleresponse.md) | :heavy_check_mark:                                                         | N/A                                                                        |