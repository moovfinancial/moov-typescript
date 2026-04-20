# GooglePayIntermediateSigningKey

Contains the intermediate signing key for verification.

## Example Usage

```typescript
import { GooglePayIntermediateSigningKey } from "@moovio/sdk/models/components";

let value: GooglePayIntermediateSigningKey = {
  signedKey: "<value>",
  signatures: [
    "<value 1>",
  ],
};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `signedKey`                                                       | *string*                                                          | :heavy_check_mark:                                                | A JSON-encoded serialized string containing the signing key data. |
| `signatures`                                                      | *string*[]                                                        | :heavy_check_mark:                                                | Base64-encoded signatures of the `signedKey`.                     |