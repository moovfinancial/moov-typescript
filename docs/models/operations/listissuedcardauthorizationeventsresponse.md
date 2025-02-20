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
      eventID: "bc670546-42f6-4ae9-b2cc-6863cba7744d",
      eventType: "authorization",
      amount: "-14.89",
      result: "processed",
      createdOn: new Date("2023-12-28T14:16:16.603Z"),
    },
  ],
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `headers`                                                                                            | Record<string, *string*[]>                                                                           | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `result`                                                                                             | [components.IssuedCardAuthorizationEvent](../../models/components/issuedcardauthorizationevent.md)[] | :heavy_check_mark:                                                                                   | N/A                                                                                                  |