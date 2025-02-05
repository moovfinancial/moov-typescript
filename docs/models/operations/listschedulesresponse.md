# ListSchedulesResponse

## Example Usage

```typescript
import { ListSchedulesResponse } from "@moovio/sdk/models/operations";

let value: ListSchedulesResponse = {
  headers: {
    "key": [
      "<value>",
    ],
  },
  result: [
    {
      destinationAccountID: "c520f1b9-0ba7-42f5-b977-248cdbe41c69",
      mode: "production",
      occurrences: {
        mode: "production",
        runOn: new Date("2024-03-13T10:14:52.824Z"),
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
            "smoothly absentmindedly gifted scrap materialise during scope",
        },
      },
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
            "whereas drag pull bookend orderly provided excepting mysteriously boo analyse",
        },
        start: new Date("2009-11-10T23:00:00Z"),
      },
      scheduleID: "c520f1b9-0ba7-42f5-b977-248cdbe41c69",
      sourceAccountID: "c520f1b9-0ba7-42f5-b977-248cdbe41c69",
      createdOn: new Date("2024-11-28T01:49:49.888Z"),
      updatedOn: new Date("2023-02-05T11:00:40.920Z"),
    },
  ],
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `headers`                                                                    | Record<string, *string*[]>                                                   | :heavy_check_mark:                                                           | N/A                                                                          |
| `result`                                                                     | [components.ScheduleResponse](../../models/components/scheduleresponse.md)[] | :heavy_check_mark:                                                           | N/A                                                                          |