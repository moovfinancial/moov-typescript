# ListIssuedCardAuthorizationEventsRequest

## Example Usage

```typescript
import { ListIssuedCardAuthorizationEventsRequest } from "@moovio/sdk/models/operations";

let value: ListIssuedCardAuthorizationEventsRequest = {
  accountID: "29ffdee1-d608-4117-85e5-d0f040f05a50",
  authorizationID: "b6db91f8-49b7-4a1d-9ac1-8b8109cf9361",
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