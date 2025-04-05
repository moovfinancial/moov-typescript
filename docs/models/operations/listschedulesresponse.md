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
      occurrences: [
        {
          mode: "production",
          runOn: new Date("2024-01-10T20:33:28.677Z"),
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
            description: "commandeer grouper swathe shinny alert",
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
            "liquid ameliorate pfft lanky merrily aha paltry cross motor despite",
        },
        start: new Date("2009-11-10T23:00:00Z"),
      },
      scheduleID: "c520f1b9-0ba7-42f5-b977-248cdbe41c69",
      sourceAccountID: "c520f1b9-0ba7-42f5-b977-248cdbe41c69",
      createdOn: new Date("2025-03-20T23:55:18.509Z"),
      updatedOn: new Date("2023-02-08T21:18:23.260Z"),
    },
  ],
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `headers`                                                                            | Record<string, *string*[]>                                                           | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `result`                                                                             | [components.ScheduleListResponse](../../models/components/schedulelistresponse.md)[] | :heavy_check_mark:                                                                   | N/A                                                                                  |