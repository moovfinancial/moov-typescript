# GetScheduledOccurrenceResponse

## Example Usage

```typescript
import { GetScheduledOccurrenceResponse } from "@moovio/sdk/models/operations";

let value: GetScheduledOccurrenceResponse = {
  headers: {
    "key": [
      "<value>",
    ],
  },
  result: {
    mode: "production",
    runOn: new Date("2025-11-02T23:48:55.276Z"),
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
        "embalm furthermore optimistically unlike instead of fiercely",
    },
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `headers`                                                                        | Record<string, *string*[]>                                                       | :heavy_check_mark:                                                               | N/A                                                                              |
| `result`                                                                         | [components.OccurrencesResponse](../../models/components/occurrencesresponse.md) | :heavy_check_mark:                                                               | N/A                                                                              |