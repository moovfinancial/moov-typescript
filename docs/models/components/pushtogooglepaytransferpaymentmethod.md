# PushToGooglePayTransferPaymentMethod

## Example Usage

```typescript
import { PushToGooglePayTransferPaymentMethod } from "@moovio/sdk/models/components";

let value: PushToGooglePayTransferPaymentMethod = {
  paymentMethodID: "79b30df0-add6-4f55-aff2-7286c0d64596",
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
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `paymentMethodID`                                                            | *string*                                                                     | :heavy_check_mark:                                                           | ID of the payment method.                                                    |
| `paymentMethodType`                                                          | *"push-to-google-pay"*                                                       | :heavy_check_mark:                                                           | N/A                                                                          |
| `googlePay`                                                                  | [components.GooglePayResponse](../../models/components/googlepayresponse.md) | :heavy_check_mark:                                                           | Describes a Google Pay token on a Moov account.                              |