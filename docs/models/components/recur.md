# Recur

Defines configuration for recurring transfers.

## Example Usage

```typescript
import { Recur } from "@moovio/sdk/models/components";

let value: Recur = {
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
      "serpentine suspiciously super electric gee weatherize out authorized",
  },
  start: new Date("2009-11-10T23:00:00Z"),
};
```

## Fields

| Field                                                                                                                                                                                                                            | Type                                                                                                                                                                                                                             | Required                                                                                                                                                                                                                         | Description                                                                                                                                                                                                                      | Example                                                                                                                                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `recurrenceRule`                                                                                                                                                                                                                 | *string*                                                                                                                                                                                                                         | :heavy_check_mark:                                                                                                                                                                                                               |   RRule as defined by RFC 5545 (https://www.rfc-editor.org/rfc/rfc5545#section-3.3.10). <br/>  Generators available online at the following sites - https://freetools.textmagic.com/rrule-generator, https://jkbrzt.github.io/rrule/ |                                                                                                                                                                                                                                  |
| `runTransfer`                                                                                                                                                                                                                    | [components.RunTransfer](../../models/components/runtransfer.md)                                                                                                                                                                 | :heavy_check_mark:                                                                                                                                                                                                               | Defines the attributes of a transfer.                                                                                                                                                                                            |                                                                                                                                                                                                                                  |
| `indefinite`                                                                                                                                                                                                                     | *boolean*                                                                                                                                                                                                                        | :heavy_minus_sign:                                                                                                                                                                                                               | True if the RRule set runs indefinitely.                                                                                                                                                                                         |                                                                                                                                                                                                                                  |
| `start`                                                                                                                                                                                                                          | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                                                                               | N/A                                                                                                                                                                                                                              | 2009-11-10T23:00:00Z                                                                                                                                                                                                             |