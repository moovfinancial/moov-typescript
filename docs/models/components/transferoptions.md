# TransferOptions

## Example Usage

```typescript
import { TransferOptions } from "@moovio/sdk/models/components";

let value: TransferOptions = {
  sourceOptions: [
    {
      paymentMethodID: "880c87e7-4097-4416-b32b-61024b85211e",
      paymentMethodType: "push-to-google-pay",
      googlePay: {
        brand: "Visa",
        cardDetails: "1234",
        fingerprint:
          "9948962d92a1ce40c9f918cd9ece3a22bde62fb325a2f1fe2e833969de672ba3",
        expiration: {
          month: "01",
          year: "21",
        },
        issuerCountry: "US",
      },
    },
  ],
  destinationOptions: [
    {
      paymentMethodID: "e75eaa04-98d0-4f99-856f-912ec1ae4c0b",
      paymentMethodType: "card-present-payment",
    },
  ],
};
```

## Fields

| Field                                | Type                                 | Required                             | Description                          |
| ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ |
| `sourceOptions`                      | *components.TransferPaymentMethod*[] | :heavy_minus_sign:                   | N/A                                  |
| `destinationOptions`                 | *components.TransferPaymentMethod*[] | :heavy_minus_sign:                   | N/A                                  |