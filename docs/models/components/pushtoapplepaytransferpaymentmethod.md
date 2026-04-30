# PushToApplePayTransferPaymentMethod

## Example Usage

```typescript
import { PushToApplePayTransferPaymentMethod } from "@moovio/sdk/models/components";

let value: PushToApplePayTransferPaymentMethod = {
  paymentMethodID: "ac329481-6863-48e9-8b68-334bac8eb6d8",
  paymentMethodType: "push-to-apple-pay",
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
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `paymentMethodID`                                                          | *string*                                                                   | :heavy_check_mark:                                                         | ID of the payment method.                                                  |
| `paymentMethodType`                                                        | *"push-to-apple-pay"*                                                      | :heavy_check_mark:                                                         | N/A                                                                        |
| `applePay`                                                                 | [components.ApplePayResponse](../../models/components/applepayresponse.md) | :heavy_check_mark:                                                         | Describes an Apple Pay token on a Moov account.                            |