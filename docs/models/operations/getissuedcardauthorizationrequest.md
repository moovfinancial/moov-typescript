# GetIssuedCardAuthorizationRequest

## Example Usage

```typescript
import { GetIssuedCardAuthorizationRequest } from "@moovio/sdk/models/operations";

let value: GetIssuedCardAuthorizationRequest = {
  accountID: "91a6dcf4-2295-4e1c-87a9-8b8e8ecde35e",
  authorizationID: "7129668a-7537-46d0-999f-e8403dfb99a0",
};
```

## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `accountID`                                                 | *string*                                                    | :heavy_check_mark:                                          | The Moov business account for which cards have been issued. |
| `authorizationID`                                           | *string*                                                    | :heavy_check_mark:                                          | N/A                                                         |