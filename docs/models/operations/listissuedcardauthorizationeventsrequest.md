# ListIssuedCardAuthorizationEventsRequest

## Example Usage

```typescript
import { ListIssuedCardAuthorizationEventsRequest } from "moov-sdk/models/operations";

let value: ListIssuedCardAuthorizationEventsRequest = {
  accountID: "e7351ae9-a4be-403e-bc13-550242d83dc6",
  authorizationID: "a9161603-7921-4d19-bc2a-bb0a24e0d80c",
  skip: 60,
  count: 20,
};
```

## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 | Example                                                     |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `xMoovVersion`                                              | [components.Versions](../../models/components/versions.md)  | :heavy_minus_sign:                                          | Specify an API version.                                     |                                                             |
| `accountID`                                                 | *string*                                                    | :heavy_check_mark:                                          | The Moov business account for which cards have been issued. |                                                             |
| `authorizationID`                                           | *string*                                                    | :heavy_check_mark:                                          | N/A                                                         |                                                             |
| `skip`                                                      | *number*                                                    | :heavy_minus_sign:                                          | N/A                                                         | 60                                                          |
| `count`                                                     | *number*                                                    | :heavy_minus_sign:                                          | N/A                                                         | 20                                                          |