# PullFromGooglePayTransferPaymentMethod

## Example Usage

```typescript
import { PullFromGooglePayTransferPaymentMethod } from "@moovio/sdk/models/components";

let value: PullFromGooglePayTransferPaymentMethod = {
  paymentMethodID: "42c04658-659c-4c08-abd9-b33776f12084",
  paymentMethodType: "pull-from-google-pay",
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
| `paymentMethodType`                                                          | *"pull-from-google-pay"*                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `googlePay`                                                                  | [components.GooglePayResponse](../../models/components/googlepayresponse.md) | :heavy_check_mark:                                                           | Describes a Google Pay token on a Moov account.                              |