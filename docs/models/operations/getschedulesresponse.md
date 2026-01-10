# GetSchedulesResponse

## Example Usage

```typescript
import { GetSchedulesResponse } from "@moovio/sdk/models/operations";

let value: GetSchedulesResponse = {
  headers: {
    "key": [],
    "key1": [
      "<value 1>",
      "<value 2>",
    ],
  },
  result: {
    destinationAccountID: "c520f1b9-0ba7-42f5-b977-248cdbe41c69",
    mode: "production",
    occurrences: [
      {
        mode: "production",
        runOn: new Date("2024-12-06T16:58:18.357Z"),
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
                        link:
                          "https://api.moov.io/images/q7lKWleAy9fUNhEGezQ1g",
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
      start: new Date("2009-11-10T23:00:00Z"),
    },
    scheduleID: "c520f1b9-0ba7-42f5-b977-248cdbe41c69",
    sourceAccountID: "c520f1b9-0ba7-42f5-b977-248cdbe41c69",
    createdOn: new Date("2026-05-12T09:50:36.363Z"),
    updatedOn: new Date("2025-09-19T09:41:07.308Z"),
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `headers`                                                                  | Record<string, *string*[]>                                                 | :heavy_check_mark:                                                         | N/A                                                                        |
| `result`                                                                   | [components.ScheduleResponse](../../models/components/scheduleresponse.md) | :heavy_check_mark:                                                         | N/A                                                                        |