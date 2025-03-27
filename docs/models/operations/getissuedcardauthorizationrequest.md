# GetIssuedCardAuthorizationRequest

## Example Usage

```typescript
import { GetIssuedCardAuthorizationRequest } from "@moovio/sdk/models/operations";

let value: GetIssuedCardAuthorizationRequest = {
  accountID: "efc8d76b-3155-41da-8082-8c6989723ebf",
  authorizationID: "5f7992b0-883c-4ef0-94e0-48b34378ecb9",
};
```

## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `accountID`                                                 | *string*                                                    | :heavy_check_mark:                                          | The Moov business account for which cards have been issued. |
| `authorizationID`                                           | *string*                                                    | :heavy_check_mark:                                          | N/A                                                         |