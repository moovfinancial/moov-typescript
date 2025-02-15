# GetIssuedCardAuthorizationRequest

## Example Usage

```typescript
import { GetIssuedCardAuthorizationRequest } from "@moovio/sdk/models/operations";

let value: GetIssuedCardAuthorizationRequest = {
  accountID: "a191a6dc-f422-495e-91c7-a98b8e8ecde3",
  authorizationID: "e2712966-8a75-4376-ad09-9fe8403dfb99",
};
```

## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `accountID`                                                 | *string*                                                    | :heavy_check_mark:                                          | The Moov business account for which cards have been issued. |
| `authorizationID`                                           | *string*                                                    | :heavy_check_mark:                                          | N/A                                                         |