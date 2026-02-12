# TransferOptions

## Example Usage

```typescript
import { TransferOptions } from "@moovio/sdk/models/components";

let value: TransferOptions = {
  sourceOptions: [
    {
      paymentMethodID: "<id>",
      paymentMethodType: "apple-pay",
      applePay: {
        brand: "Visa",
        cardType: "credit",
        cardDisplayName: "Visa 1256",
        fingerprint:
          "9948962d92a1ce40c9f918cd9ece3a22bde62fb325a2f1fe2e833969de672ba3",
        expiration: {
          month: "01",
          year: "21",
        },
        dynamicLastFour: "<value>",
        issuerCountry: "US",
      },
    },
  ],
  destinationOptions: [
    {
      paymentMethodID: "<id>",
      paymentMethodType: "rtp-credit",
      bankAccount: {
        bankAccountID: "<id>",
        fingerprint: "<value>",
        status: "verified",
        holderName: "<value>",
        holderType: "business",
        bankName: "<value>",
        bankAccountType: "loan",
        routingNumber: "<value>",
        lastFourAccountNumber: "<value>",
        updatedOn: new Date("2026-10-09T09:15:43.090Z"),
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