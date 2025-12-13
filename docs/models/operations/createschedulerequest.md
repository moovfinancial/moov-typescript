# CreateScheduleRequest

## Example Usage

```typescript
import { CreateScheduleRequest } from "@moovio/sdk/models/operations";

let value: CreateScheduleRequest = {
  accountID: "32fdd1a4-cbce-4d16-b063-82ef1d27155c",
  upsertSchedule: {
    occurrences: [
      {
        occurrenceID: "c520f1b9-0ba7-42f5-b977-248cdbe41c69",
        runOn: new Date("2009-11-10T23:00:00Z"),
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
    ],
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
      start: new Date("2009-11-10T23:00:00Z"),
    },
  },
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `accountID`                                                            | *string*                                                               | :heavy_check_mark:                                                     | Account ID of the account that will run the transfer.                  |
| `upsertSchedule`                                                       | [components.UpsertSchedule](../../models/components/upsertschedule.md) | :heavy_check_mark:                                                     | N/A                                                                    |