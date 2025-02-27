# ListIssuedCardAuthorizationEventsResponse

## Example Usage

```typescript
import { ListIssuedCardAuthorizationEventsResponse } from "@moovio/sdk/models/operations";

let value: ListIssuedCardAuthorizationEventsResponse = {
  headers: {
    "key": [
      "<value>",
    ],
  },
  result: [
    {
      eventID: "da0828c6-9897-423e-bbf0-5f7992b0883c",
      eventType: "clearing",
      amount: "-14.89",
      result: "approved",
      createdOn: new Date("2023-12-06T11:00:14.216Z"),
    },
  ],
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `headers`                                                                                            | Record<string, *string*[]>                                                                           | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `result`                                                                                             | [components.IssuedCardAuthorizationEvent](../../models/components/issuedcardauthorizationevent.md)[] | :heavy_check_mark:                                                                                   | N/A                                                                                                  |