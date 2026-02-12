# CreateScheduleResponse

## Example Usage

```typescript
import { CreateScheduleResponse } from "@moovio/sdk/models/operations";

let value: CreateScheduleResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
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
                        imageID: "<id>",
                        link:
                          "https://api.moov.io/images/q7lKWleAy9fUNhEGezQ1g",
                        publicID: "<id>",
                      },
                    ],
                  },
                ],
                images: [
                  {
                    imageID: "<id>",
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
                      imageID: "<id>",
                      link: "https://api.moov.io/images/q7lKWleAy9fUNhEGezQ1g",
                      publicID: "<id>",
                    },
                  ],
                },
              ],
              images: [
                {
                  imageID: "<id>",
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
    createdOn: new Date("2025-01-13T23:54:26.206Z"),
    updatedOn: new Date("2026-07-04T10:48:35.137Z"),
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `headers`                                                                  | Record<string, *string*[]>                                                 | :heavy_check_mark:                                                         | N/A                                                                        |
| `result`                                                                   | [components.ScheduleResponse](../../models/components/scheduleresponse.md) | :heavy_check_mark:                                                         | N/A                                                                        |