# RecurResponse

## Example Usage

```typescript
import { RecurResponse } from "@moovio/sdk/models/components";

let value: RecurResponse = {
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
    description: "over towards proper suspension but sweetly unto uh-huh limp",
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
};
```

## Fields

| Field                                                                                                                                                                                                                           | Type                                                                                                                                                                                                                            | Required                                                                                                                                                                                                                        | Description                                                                                                                                                                                                                     | Example                                                                                                                                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `recurrenceRule`                                                                                                                                                                                                                | *string*                                                                                                                                                                                                                        | :heavy_check_mark:                                                                                                                                                                                                              |   RRule as defined by RFC 5545 (https://www.rfc-editor.org/rfc/rfc5545#section-3.3.10).<br/>  Generators available online at the following sites - https://freetools.textmagic.com/rrule-generator, https://jkbrzt.github.io/rrule/ |                                                                                                                                                                                                                                 |
| `runTransfer`                                                                                                                                                                                                                   | [components.RunTransfer](../../models/components/runtransfer.md)                                                                                                                                                                | :heavy_check_mark:                                                                                                                                                                                                              | N/A                                                                                                                                                                                                                             |                                                                                                                                                                                                                                 |
| `indefinite`                                                                                                                                                                                                                    | *boolean*                                                                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                                                                              | True if the RRule set runs indefinitely.                                                                                                                                                                                        |                                                                                                                                                                                                                                 |
| `start`                                                                                                                                                                                                                         | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                                                              | N/A                                                                                                                                                                                                                             | 2009-11-10T23:00:00Z                                                                                                                                                                                                            |