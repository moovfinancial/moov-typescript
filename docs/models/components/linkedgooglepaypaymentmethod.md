# LinkedGooglePayPaymentMethod

## Example Usage

```typescript
import { LinkedGooglePayPaymentMethod } from "@moovio/sdk/models/components";

let value: LinkedGooglePayPaymentMethod = {
  paymentMethodID: "<id>",
  paymentMethodType: "ach-credit-same-day",
  googlePay: {
    tokenID: "dcd471ec-7d5c-4016-865c-1e78c733bea2",
    brand: "Visa",
    cardType: "credit",
    cardDisplayName: "7419",
    fingerprint:
      "9948962d92a1ce40c9f918cd9ece3a22bde62fb325a2f1fe2e833969de672ba3",
    expiration: {
      month: "01",
      year: "21",
    },
    dynamicLastFour: "7419",
    issuerCountry: "US",
    authMethod: "PAN_ONLY",
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `paymentMethodID`                                                            | *string*                                                                     | :heavy_check_mark:                                                           | The new payment method's ID.                                                 |
| `paymentMethodType`                                                          | [components.PaymentMethodType](../../models/components/paymentmethodtype.md) | :heavy_check_mark:                                                           | The payment method type that represents a payment rail and directionality    |
| `googlePay`                                                                  | [components.GooglePayResponse](../../models/components/googlepayresponse.md) | :heavy_check_mark:                                                           | Describes a Google Pay token on a Moov account.                              |