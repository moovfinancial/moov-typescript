# Occurrence

Occurrences to either create or modify.

## Example Usage

```typescript
import { Occurrence } from "@moovio/sdk/models/components";

let value: Occurrence = {
  occurrenceID: "c520f1b9-0ba7-42f5-b977-248cdbe41c69",
  runOn: new Date("2009-11-10T23:00:00Z"),
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
      "yowza violin for deliberately crossly sprinkles when how sin um",
  },
};
```

## Fields

| Field                                                                                                                                   | Type                                                                                                                                    | Required                                                                                                                                | Description                                                                                                                             | Example                                                                                                                                 |
| --------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| `canceled`                                                                                                                              | *boolean*                                                                                                                               | :heavy_minus_sign:                                                                                                                      | If set to true, will cancel the occurrence. If set false will resume the occurrence. If unset leaves the value unchanged.               |                                                                                                                                         |
| `occurrenceID`                                                                                                                          | *string*                                                                                                                                | :heavy_minus_sign:                                                                                                                      |   If set this defines what occurrence to modify, if invalid will fail the request. <br/>  If null or "" it defines to add a new occurrence. | c520f1b9-0ba7-42f5-b977-248cdbe41c69                                                                                                    |
| `runOn`                                                                                                                                 | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                           | :heavy_minus_sign:                                                                                                                      | Timestamp to run the transfer after. Value must be into the future.                                                                     | 2009-11-10T23:00:00Z                                                                                                                    |
| `runTransfer`                                                                                                                           | [components.RunTransfer](../../models/components/runtransfer.md)                                                                        | :heavy_minus_sign:                                                                                                                      | Defines the attributes of a transfer.                                                                                                   |                                                                                                                                         |