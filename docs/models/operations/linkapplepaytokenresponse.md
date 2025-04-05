# LinkApplePayTokenResponse

## Example Usage

```typescript
import { LinkApplePayTokenResponse } from "@moovio/sdk/models/operations";

let value: LinkApplePayTokenResponse = {
  headers: {
    "key": [
      "<value>",
    ],
  },
  result: {
    paymentMethodID: "2d6f1e4a-651e-435f-b01b-9b57a1aebb00",
    paymentMethodType: "card-payment",
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
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `headers`                                                                                        | Record<string, *string*[]>                                                                       | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `result`                                                                                         | [components.LinkedApplePayPaymentMethod](../../models/components/linkedapplepaypaymentmethod.md) | :heavy_check_mark:                                                                               | N/A                                                                                              |