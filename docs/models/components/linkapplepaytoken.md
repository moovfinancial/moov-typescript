# LinkApplePayToken

  Contains the user's payment information as returned from Apple Pay.

  Refer to [Apple's documentation](https://developer.apple.com/documentation/apple_pay_on_the_web/applepaypaymenttoken) 
  for more information.

## Example Usage

```typescript
import { LinkApplePayToken } from "@moovio/sdk/models/components";

let value: LinkApplePayToken = {
  paymentData: {
    version: "EC_v1",
    data: "3+f4oOTwPa6f1UZ6tG...CE=",
    signature: "MIAGCSqGSIb3DQ.AAAA==",
    header: {
      ephemeralPublicKey: "MFkwEK...Md==",
      publicKeyHash: "l0CnXdMv...D1I=",
      transactionId: "32b...4f3",
    },
  },
  paymentMethod: {
    displayName: "Visa 1234",
    network: "Visa",
    type: "debit",
  },
  transactionIdentifier: "32b...4f3",
};
```

## Fields

| Field                                                                                                                                                                                                                     | Type                                                                                                                                                                                                                      | Required                                                                                                                                                                                                                  | Description                                                                                                                                                                                                               | Example                                                                                                                                                                                                                   |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `paymentData`                                                                                                                                                                                                             | [components.LinkApplePaymentData](../../models/components/linkapplepaymentdata.md)                                                                                                                                        | :heavy_check_mark:                                                                                                                                                                                                        |   Contains the encrypted payment data.<br/><br/>  Refer to [Apple's documentation](https://developer.apple.com/documentation/apple_pay_on_the_web/applepaypaymenttoken/1916115-paymentdata) <br/>  for more information.  |                                                                                                                                                                                                                           |
| `paymentMethod`                                                                                                                                                                                                           | [components.LinkApplePaymentMethod](../../models/components/linkapplepaymentmethod.md)                                                                                                                                    | :heavy_check_mark:                                                                                                                                                                                                        |   Provides information about the underlying card.<br/><br/>  Refer to [Apple's documentation](https://developer.apple.com/documentation/apple_pay_on_the_web/applepaypaymenttoken/1916113-paymentmethod) <br/>  for more information. |                                                                                                                                                                                                                           |
| `transactionIdentifier`                                                                                                                                                                                                   | *string*                                                                                                                                                                                                                  | :heavy_check_mark:                                                                                                                                                                                                        | A unique identifier provided by Apple Pay for this payment.                                                                                                                                                               | 32b...4f3                                                                                                                                                                                                                 |