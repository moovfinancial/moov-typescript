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
        "over towards proper suspension but sweetly unto uh-huh limp",
      lineItems: {
        items: [
          {
            name: "<value>",
            basePrice: {
              currency: "USD",
              valueDecimal: "12.987654321",
            },
            quantity: 721250,
            options: [
              {
                name: "<value>",
                quantity: 898379,
                priceModifier: {
                  currency: "USD",
                  valueDecimal: "12.987654321",
                },
                images: [
                  {
                    imageID: "5d5d240d-d6b6-497f-9d81-3f2acaf445ca",
                    link: "https://api.moov.io/images/q7lKWleAy9fUNhEGezQ1g",
                    publicID: "<id>",
                  },
                ],
              },
            ],
            images: [
              {
                imageID: "5d5d240d-d6b6-497f-9d81-3f2acaf445ca",
                link: "https://api.moov.io/images/q7lKWleAy9fUNhEGezQ1g",
                publicID: "<id>",
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