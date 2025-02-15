# LinkApplePayTokenRequest

## Example Usage

```typescript
import { LinkApplePayTokenRequest } from "@moovio/sdk/models/operations";

let value: LinkApplePayTokenRequest = {
  accountID: "78b1369e-92fd-48e8-9edf-e026f42e7e2a",
  linkApplePay: {
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
  },
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `accountID`                                                        | *string*                                                           | :heavy_check_mark:                                                 | ID of the Moov account representing the cardholder.                |
| `linkApplePay`                                                     | [components.LinkApplePay](../../models/components/linkapplepay.md) | :heavy_check_mark:                                                 | N/A                                                                |