# GetIssuedCardAuthorizationRequest

## Example Usage

```typescript
import { GetIssuedCardAuthorizationRequest } from "@moovio/sdk/models/operations";

let value: GetIssuedCardAuthorizationRequest = {
  accountID: "9668a753-76d0-499f-8e84-03dfb99a055f",
  authorizationID: "b61520a0-0627-451a-9aad-0087f56d9108",
};
```

## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `accountID`                                                 | *string*                                                    | :heavy_check_mark:                                          | The Moov business account for which cards have been issued. |
| `authorizationID`                                           | *string*                                                    | :heavy_check_mark:                                          | N/A                                                         |