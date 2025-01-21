# GetIssuedCardAuthorizationRequest

## Example Usage

```typescript
import { GetIssuedCardAuthorizationRequest } from "moov-sdk/models/operations";

let value: GetIssuedCardAuthorizationRequest = {
  accountID: "00f79278-27e9-42fe-bec8-c90118bfe991",
  authorizationID: "4e3b172d-9f2d-4b60-8b1c-c3fc9b71a6f1",
};
```

## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `xMoovVersion`                                              | [components.Versions](../../models/components/versions.md)  | :heavy_minus_sign:                                          | Specify an API version.                                     |
| `accountID`                                                 | *string*                                                    | :heavy_check_mark:                                          | The Moov business account for which cards have been issued. |
| `authorizationID`                                           | *string*                                                    | :heavy_check_mark:                                          | N/A                                                         |