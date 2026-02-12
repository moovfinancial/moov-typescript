# TransferOptions

## Example Usage

```typescript
import { TransferOptions } from "@moovio/sdk/models/components";

let value: TransferOptions = {
  sourceOptions: [
    {
      paymentMethodID: "<id>",
      paymentMethodType: "card-present-payment",
    },
  ],
  destinationOptions: [
    {
      paymentMethodID: "<id>",
      paymentMethodType: "rtp-credit",
      bankAccount: {
        bankAccountID: "<id>",
        fingerprint: "<value>",
        status: "errored",
        holderName: "<value>",
        holderType: "individual",
        bankName: "<value>",
        bankAccountType: "checking",
        routingNumber: "<value>",
        lastFourAccountNumber: "<value>",
        updatedOn: new Date("2026-02-19T23:59:30.429Z"),
      },
    },
  ],
};
```

## Fields

| Field                        | Type                         | Required                     | Description                  |
| ---------------------------- | ---------------------------- | ---------------------------- | ---------------------------- |
| `sourceOptions`              | *components.PaymentMethod*[] | :heavy_minus_sign:           | N/A                          |
| `destinationOptions`         | *components.PaymentMethod*[] | :heavy_minus_sign:           | N/A                          |