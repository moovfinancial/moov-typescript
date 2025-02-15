# TransferOptions

## Example Usage

```typescript
import { TransferOptions } from "@moovio/sdk/models/components";

let value: TransferOptions = {
  sourceOptions: [
    {
      paymentMethodID: "0371b350-4d8b-4339-9331-c1ed2f5e1270",
      paymentMethodType: "rtp-credit",
      bankAccount: {
        bankAccountID: "92161ac7-1936-43ad-bdc8-8308b6a556d3",
        fingerprint: "<value>",
        status: "verified",
        holderName: "<value>",
        holderType: "individual",
        bankName: "<value>",
        bankAccountType: "savings",
        routingNumber: "<value>",
        lastFourAccountNumber: "<value>",
        updatedOn: new Date("2024-06-07T06:20:48.185Z"),
      },
    },
  ],
  destinationOptions: [
    {
      paymentMethodID: "540c7432-f944-4fa2-ac6a-921c3b0f86c6",
      paymentMethodType: "ach-credit-standard",
      bankAccount: {
        bankAccountID: "0e8bf610-7957-422e-9285-f134512d72eb",
        fingerprint: "<value>",
        status: "errored",
        holderName: "<value>",
        holderType: "business",
        bankName: "<value>",
        bankAccountType: "loan",
        routingNumber: "<value>",
        lastFourAccountNumber: "<value>",
        updatedOn: new Date("2023-03-28T09:48:21.558Z"),
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