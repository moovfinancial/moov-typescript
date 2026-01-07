# GetScheduledOccurrenceResponse

## Example Usage

```typescript
import { GetScheduledOccurrenceResponse } from "@moovio/sdk/models/operations";

let value: GetScheduledOccurrenceResponse = {
  headers: {
    "key": [
      "<value 1>",
    ],
    "key1": [
      "<value 1>",
    ],
  },
  result: {
    mode: "production",
    runOn: new Date("2024-12-07T23:18:44.350Z"),
    runTransfer: {
      amount: {
        currency: "USD",
        value: 1204,
      },
      salesTaxAmount: {
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
      lineItems: {
        items: [
          {
            name: "<value>",
            basePrice: {
              currency: "USD",
              valueDecimal: "12.987654321",
            },
            quantity: 988494,
            options: [
              {
                name: "<value>",
                quantity: 556915,
                priceModifier: {
                  currency: "USD",
                  valueDecimal: "12.987654321",
                },
              },
            ],
          },
        ],
      },
    },
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `headers`                                                                        | Record<string, *string*[]>                                                       | :heavy_check_mark:                                                               | N/A                                                                              |
| `result`                                                                         | [components.OccurrencesResponse](../../models/components/occurrencesresponse.md) | :heavy_check_mark:                                                               | N/A                                                                              |