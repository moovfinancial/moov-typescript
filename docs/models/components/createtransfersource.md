# CreateTransferSource

Where funds for a transfer originate. For the source, you must include either a `paymentMethodID` or a `transferID`.

## Example Usage

```typescript
import { CreateTransferSource } from "@moovio/sdk/models/components";

let value: CreateTransferSource = {
  cardDetails: {
    dynamicDescriptor: "WhlBdy *Yoga 11-12",
  },
  achDetails: {
    companyEntryDescription: "Gym dues",
    originatingCompanyName: "Whole Body Fit",
    debitHoldPeriod: "2-days",
  },
};
```

## Fields

| Field                                                                                                                                                                   | Type                                                                                                                                                                    | Required                                                                                                                                                                | Description                                                                                                                                                             |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `transferID`                                                                                                                                                            | *string*                                                                                                                                                                | :heavy_minus_sign:                                                                                                                                                      | A `transferID` is used to create a [transfer group](https://docs.moov.io/guides/money-movement/transfer-groups/), <br/>associating the new transfer with a parent transfer. |
| `paymentMethodID`                                                                                                                                                       | *string*                                                                                                                                                                | :heavy_minus_sign:                                                                                                                                                      | N/A                                                                                                                                                                     |
| `paymentToken`                                                                                                                                                          | *string*                                                                                                                                                                | :heavy_minus_sign:                                                                                                                                                      | N/A                                                                                                                                                                     |
| `cardDetails`                                                                                                                                                           | [components.CreateTransferSourceCard](../../models/components/createtransfersourcecard.md)                                                                              | :heavy_minus_sign:                                                                                                                                                      | N/A                                                                                                                                                                     |
| `achDetails`                                                                                                                                                            | [components.CreateTransferSourceACH](../../models/components/createtransfersourceach.md)                                                                                | :heavy_minus_sign:                                                                                                                                                      | N/A                                                                                                                                                                     |