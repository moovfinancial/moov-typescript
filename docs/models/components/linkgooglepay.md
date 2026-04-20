# LinkGooglePay

  The encrypted Google Pay payment token (ECv2 format).

  Refer to [Google's documentation](https://developers.google.com/pay/api/web/guides/resources/payment-data-cryptography#payment-method-token-structure)
  for more information.

## Example Usage

```typescript
import { LinkGooglePay } from "@moovio/sdk/models/components";

let value: LinkGooglePay = {
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
};
```

## Fields

| Field                                                                                                                                                                                                                                                 | Type                                                                                                                                                                                                                                                  | Required                                                                                                                                                                                                                                              | Description                                                                                                                                                                                                                                           |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `token`                                                                                                                                                                                                                                               | [components.GooglePayToken](../../models/components/googlepaytoken.md)                                                                                                                                                                                | :heavy_check_mark:                                                                                                                                                                                                                                    |   Contains the encrypted payment token as returned from Google Pay.<br/><br/>  Refer to [Google's documentation](https://developers.google.com/pay/api/web/guides/resources/payment-data-cryptography#payment-method-token-structure)<br/>  for more information. |