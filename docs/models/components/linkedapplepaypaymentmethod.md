# LinkedApplePayPaymentMethod

## Example Usage

```typescript
import { LinkedApplePayPaymentMethod } from "@moovio/sdk/models/components";

let value: LinkedApplePayPaymentMethod = {
  paymentMethodID: "b33fbca4-a783-4d04-9050-b13e08ac41a6",
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
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `paymentMethodID`                                                            | *string*                                                                     | :heavy_check_mark:                                                           | The new payment method's ID.                                                 |
| `paymentMethodType`                                                          | [components.PaymentMethodType](../../models/components/paymentmethodtype.md) | :heavy_check_mark:                                                           | The payment method type that represents a payment rail and directionality    |
| `applePay`                                                                   | [components.ApplePayResponse](../../models/components/applepayresponse.md)   | :heavy_check_mark:                                                           | Describes an Apple Pay token on a Moov account.                              |