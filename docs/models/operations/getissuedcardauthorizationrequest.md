# GetIssuedCardAuthorizationRequest

## Example Usage

```typescript
import { GetIssuedCardAuthorizationRequest } from "moov-sdk/models/operations";

let value: GetIssuedCardAuthorizationRequest = {
  accountID: "b3befc8d-76b3-4155-b1da-0828c6989723",
  authorizationID: "bf05f799-2b08-483c-bef0-4e048b34378e",
};
```

## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `xMoovVersion`                                              | [components.Versions](../../models/components/versions.md)  | :heavy_minus_sign:                                          | Specify an API version.                                     |
| `accountID`                                                 | *string*                                                    | :heavy_check_mark:                                          | The Moov business account for which cards have been issued. |
| `authorizationID`                                           | *string*                                                    | :heavy_check_mark:                                          | N/A                                                         |