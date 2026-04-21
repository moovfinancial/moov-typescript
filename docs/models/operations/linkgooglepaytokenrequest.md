# LinkGooglePayTokenRequest

## Example Usage

```typescript
import { LinkGooglePayTokenRequest } from "@moovio/sdk/models/operations";

let value: LinkGooglePayTokenRequest = {
  accountID: "<id>",
  linkGooglePay: {
    token: {
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
    },
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `accountID`                                                          | *string*                                                             | :heavy_check_mark:                                                   | ID of the Moov account representing the cardholder.                  |
| `linkGooglePay`                                                      | [components.LinkGooglePay](../../models/components/linkgooglepay.md) | :heavy_check_mark:                                                   | N/A                                                                  |