# LinkApplePay

  The JSON structure returned from Apple Pay when authorizing a payment session.

  Refer to [Apple's documentation](https://developer.apple.com/documentation/apple_pay_on_the_web/applepaypayment) 
  for more information.

## Example Usage

```typescript
import { LinkApplePay } from "@moovio/sdk/models/components";

let value: LinkApplePay = {
  token: {
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
  },
  billingContact: {
    addressLines: [
      "123 Sesame Street",
    ],
    locality: "Phoenix",
    postalCode: "30345",
    administrativeArea: "AZ",
    countryCode: "US",
  },
};
```

## Fields

| Field                                                                                                                                                                                                                   | Type                                                                                                                                                                                                                    | Required                                                                                                                                                                                                                | Description                                                                                                                                                                                                             |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `token`                                                                                                                                                                                                                 | [components.LinkApplePayToken](../../models/components/linkapplepaytoken.md)                                                                                                                                            | :heavy_check_mark:                                                                                                                                                                                                      |   Contains the user's payment information as returned from Apple Pay.<br/><br/>  Refer to [Apple's documentation](https://developer.apple.com/documentation/apple_pay_on_the_web/applepaypaymenttoken) <br/>  for more information. |
| `billingContact`                                                                                                                                                                                                        | [components.AppleBillingContact](../../models/components/applebillingcontact.md)                                                                                                                                        | :heavy_minus_sign:                                                                                                                                                                                                      |   Billing contact information as returned from Apple Pay.<br/>  <br/>  Refer to [Apple's documentation](https://developer.apple.com/documentation/apple_pay_on_the_web/applepaypaymentcontact) <br/>  for more information. |