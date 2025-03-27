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
          runOn: new Date("2024-11-07T23:11:32.353Z"),
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
              "whenever intrepid finally huzzah captain equally apud upward",
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
          description: "pfft settle squid madly uh-huh scotch handle",
        },
        start: new Date("2009-11-10T23:00:00Z"),
      },
      scheduleID: "c520f1b9-0ba7-42f5-b977-248cdbe41c69",
      sourceAccountID: "c520f1b9-0ba7-42f5-b977-248cdbe41c69",
      createdOn: new Date("2025-10-26T15:51:07.072Z"),
      updatedOn: new Date("2023-01-03T03:35:22.413Z"),
    },
  ],
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `headers`                                                                            | Record<string, *string*[]>                                                           | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `result`                                                                             | [components.ScheduleListResponse](../../models/components/schedulelistresponse.md)[] | :heavy_check_mark:                                                                   | N/A                                                                                  |