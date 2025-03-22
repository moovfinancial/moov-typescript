# ListIssuedCardAuthorizationEventsRequest

## Example Usage

```typescript
import { ListIssuedCardAuthorizationEventsRequest } from "@moovio/sdk/models/operations";

let value: ListIssuedCardAuthorizationEventsRequest = {
  accountID: "76835b9c-cc2a-470d-a30a-20e2850557bf",
  authorizationID: "f8929446-a940-437e-99e9-75f75ec9971a",
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