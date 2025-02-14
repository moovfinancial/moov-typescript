# ApplePayPaymentMethod

## Example Usage

```typescript
import { ApplePayPaymentMethod } from "@moovio/sdk/models/components";

let value: ApplePayPaymentMethod = {
  paymentMethodID: "ad8afb1b-f60b-44e2-8607-39b4214d6345",
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

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `paymentMethodID`                                                                                                      | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | ID of the payment method.                                                                                              |
| `paymentMethodType`                                                                                                    | [components.ApplePayPaymentMethodPaymentMethodType](../../models/components/applepaypaymentmethodpaymentmethodtype.md) | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `applePay`                                                                                                             | [components.ApplePayResponse](../../models/components/applepayresponse.md)                                             | :heavy_check_mark:                                                                                                     | Describes an Apple Pay token on a Moov account.                                                                        |