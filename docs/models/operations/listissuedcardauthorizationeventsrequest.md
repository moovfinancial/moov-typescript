# ListIssuedCardAuthorizationEventsRequest

## Example Usage

```typescript
import { ListIssuedCardAuthorizationEventsRequest } from "@moovio/sdk/models/operations";

let value: ListIssuedCardAuthorizationEventsRequest = {
  accountID: "3cba7744-dd0b-45e3-85b1-ba4bec82e768",
  authorizationID: "5b9ccc2a-70d3-40a2-80e2-850557bf8f89",
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