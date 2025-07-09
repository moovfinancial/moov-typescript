# ListIssuedCardAuthorizationEventsResponse

## Example Usage

```typescript
import { ListIssuedCardAuthorizationEventsResponse } from "@moovio/sdk/models/operations";

let value: ListIssuedCardAuthorizationEventsResponse = {
  headers: {
    "key": [
      "<value 1>",
    ],
    "key1": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    "key2": [
      "<value 1>",
    ],
  },
  result: [
    {
      eventID: "87da5152-3e35-4d04-b28e-ab18e1f378b8",
      eventType: "authorization-advice",
      amount: "-14.89",
      result: "approved",
      createdOn: new Date("2025-07-09T08:00:31.952Z"),
    },
  ],
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `headers`                                                                                            | Record<string, *string*[]>                                                                           | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `result`                                                                                             | [components.IssuedCardAuthorizationEvent](../../models/components/issuedcardauthorizationevent.md)[] | :heavy_check_mark:                                                                                   | N/A                                                                                                  |