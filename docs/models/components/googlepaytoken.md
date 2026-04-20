# GooglePayToken

  Contains the encrypted payment token as returned from Google Pay.

  Refer to [Google's documentation](https://developers.google.com/pay/api/web/guides/resources/payment-data-cryptography#payment-method-token-structure)
  for more information.

## Example Usage

```typescript
import { GooglePayToken } from "@moovio/sdk/models/components";

let value: GooglePayToken = {
  protocolVersion: "ECv2",
  signature: "<value>",
  intermediateSigningKey: {
    signedKey: "<value>",
    signatures: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
  },
  signedMessage: "<value>",
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              | Example                                                                                                  |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `protocolVersion`                                                                                        | *string*                                                                                                 | :heavy_check_mark:                                                                                       | The version of the encryption/signing protocol. Must be `ECv2`.                                          | ECv2                                                                                                     |
| `signature`                                                                                              | *string*                                                                                                 | :heavy_check_mark:                                                                                       | A Base64-encoded signature of the `signedMessage`.                                                       |                                                                                                          |
| `intermediateSigningKey`                                                                                 | [components.GooglePayIntermediateSigningKey](../../models/components/googlepayintermediatesigningkey.md) | :heavy_check_mark:                                                                                       | Contains the intermediate signing key for verification.                                                  |                                                                                                          |
| `signedMessage`                                                                                          | *string*                                                                                                 | :heavy_check_mark:                                                                                       | A JSON-encoded serialized string containing the encrypted payment data.                                  |                                                                                                          |