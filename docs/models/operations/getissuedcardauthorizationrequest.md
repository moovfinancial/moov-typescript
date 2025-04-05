# GetIssuedCardAuthorizationRequest

## Example Usage

```typescript
import { GetIssuedCardAuthorizationRequest } from "@moovio/sdk/models/operations";

let value: GetIssuedCardAuthorizationRequest = {
  accountID: "fbe97c5d-e62a-4ee7-82e4-a42a5888dc28",
  authorizationID: "11d4bacd-de23-474b-83c1-801f1d7b0ea6",
};
```

## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `accountID`                                                 | *string*                                                    | :heavy_check_mark:                                          | The Moov business account for which cards have been issued. |
| `authorizationID`                                           | *string*                                                    | :heavy_check_mark:                                          | N/A                                                         |