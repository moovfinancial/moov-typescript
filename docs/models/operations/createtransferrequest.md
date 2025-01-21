# CreateTransferRequest

## Example Usage

```typescript
import { CreateTransferRequest } from "moov-sdk/models/operations";

let value: CreateTransferRequest = {
  xIdempotencyKey: "9fb3868b-7eb5-497c-b090-f8415af134c1",
  accountID: "3bce3b56-825f-425c-8323-f66c12b5b098",
  createTransfer: {
    source: {
      cardDetails: {
        dynamicDescriptor: "WhlBdy *Yoga 11-12",
      },
      achDetails: {
        companyEntryDescription: "Gym dues",
        originatingCompanyName: "Whole Body Fit",
        debitHoldPeriod: "2-days",
      },
    },
    destination: {
      paymentMethodID: "<id>",
      cardDetails: {
        dynamicDescriptor: "WhlBdy *Yoga 11-12",
      },
      achDetails: {
        companyEntryDescription: "Gym dues",
        originatingCompanyName: "Whole Body Fit",
      },
    },
    amount: {
      currency: "Boliviano boliviano",
      value: 928155,
    },
    facilitatorFee: {
      totalDecimal: "12.987654321",
      markupDecimal: "0.987654321",
    },
    description: "Pay Instructor for May 15 Class",
    metadata: {
      "optional": "metadata",
    },
  },
};
```

## Fields

| Field                                                                                                                                                                                                                                                   | Type                                                                                                                                                                                                                                                    | Required                                                                                                                                                                                                                                                | Description                                                                                                                                                                                                                                             |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `xMoovVersion`                                                                                                                                                                                                                                          | [components.Versions](../../models/components/versions.md)                                                                                                                                                                                              | :heavy_minus_sign:                                                                                                                                                                                                                                      | Specify an API version.                                                                                                                                                                                                                                 |
| `xIdempotencyKey`                                                                                                                                                                                                                                       | *string*                                                                                                                                                                                                                                                | :heavy_check_mark:                                                                                                                                                                                                                                      | Prevents duplicate transfers from being created.                                                                                                                                                                                                        |
| `xWaitFor`                                                                                                                                                                                                                                              | [components.TransferWaitFor](../../models/components/transferwaitfor.md)                                                                                                                                                                                | :heavy_minus_sign:                                                                                                                                                                                                                                      | Optional header that indicates whether to return a synchronous response that includes full transfer and rail-specific details or an <br/>asynchronous response indicating the transfer was created (this is the default response if the header is omitted). |
| `accountID`                                                                                                                                                                                                                                             | *string*                                                                                                                                                                                                                                                | :heavy_check_mark:                                                                                                                                                                                                                                      | The merchant's Moov account ID.                                                                                                                                                                                                                         |
| `createTransfer`                                                                                                                                                                                                                                        | [components.CreateTransfer](../../models/components/createtransfer.md)                                                                                                                                                                                  | :heavy_check_mark:                                                                                                                                                                                                                                      | N/A                                                                                                                                                                                                                                                     |