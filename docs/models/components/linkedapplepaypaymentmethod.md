# LinkedApplePayPaymentMethod

## Example Usage

```typescript
import { LinkedApplePayPaymentMethod } from "@moovio/sdk/models/components";

let value: LinkedApplePayPaymentMethod = {
  paymentMethodID: "d5136a9e-5641-4f17-a9b4-86116000cee0",
  paymentMethodType: "ach-debit-collect",
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