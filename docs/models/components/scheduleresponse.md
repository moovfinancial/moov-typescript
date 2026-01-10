# ScheduleResponse

## Example Usage

```typescript
import { ScheduleResponse } from "@moovio/sdk/models/components";

let value: ScheduleResponse = {
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
  createdOn: new Date("2025-12-06T18:10:16.110Z"),
  updatedOn: new Date("2026-03-25T02:08:06.106Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `description`                                                                                 | *string*                                                                                      | :heavy_minus_sign:                                                                            | Simple description to place on the transfer.                                                  |                                                                                               |
| `destinationAccountID`                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           | c520f1b9-0ba7-42f5-b977-248cdbe41c69                                                          |
| `mode`                                                                                        | [components.Mode](../../models/components/mode.md)                                            | :heavy_check_mark:                                                                            | The operating mode for an account.                                                            | production                                                                                    |
| `occurrences`                                                                                 | [components.OccurrencesResponse](../../models/components/occurrencesresponse.md)[]            | :heavy_minus_sign:                                                                            | N/A                                                                                           |                                                                                               |
| `ownerAccountID`                                                                              | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           | c520f1b9-0ba7-42f5-b977-248cdbe41c69                                                          |
| `partnerAccountID`                                                                            | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           | c520f1b9-0ba7-42f5-b977-248cdbe41c69                                                          |
| `recur`                                                                                       | [components.RecurResponse](../../models/components/recurresponse.md)                          | :heavy_minus_sign:                                                                            | N/A                                                                                           |                                                                                               |
| `scheduleID`                                                                                  | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           | c520f1b9-0ba7-42f5-b977-248cdbe41c69                                                          |
| `sourceAccountID`                                                                             | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           | c520f1b9-0ba7-42f5-b977-248cdbe41c69                                                          |
| `createdOn`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `updatedOn`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `disabledOn`                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |                                                                                               |