# ListIssuedCardAuthorizationEventsRequest

## Example Usage

```typescript
import { ListIssuedCardAuthorizationEventsRequest } from "@moovio/sdk/models/operations";

let value: ListIssuedCardAuthorizationEventsRequest = {
  accountID: "84b6c7ae-683b-43be-afc8-d76b31551da0",
  authorizationID: "28c69897-23eb-4f05-bf79-92b0883cef04",
  skip: 60,
  count: 20,
};
```

## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 | Example                                                     |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `accountID`                                                 | *string*                                                    | :heavy_check_mark:                                          | The Moov business account for which cards have been issued. |                                                             |
| `authorizationID`                                           | *string*                                                    | :heavy_check_mark:                                          | N/A                                                         |                                                             |
| `skip`                                                      | *number*                                                    | :heavy_minus_sign:                                          | N/A                                                         | 60                                                          |
| `count`                                                     | *number*                                                    | :heavy_minus_sign:                                          | N/A                                                         | 20                                                          |