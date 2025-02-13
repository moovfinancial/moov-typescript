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
      eventID: "e92cc686-3cba-4774-b4dd-0b5e35b1ba4b",
      eventType: "authorization-incremental",
      amount: "-14.89",
      result: "declined",
      createdOn: new Date("2023-05-26T03:50:47.351Z"),
    },
  ],
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `headers`                                                                                            | Record<string, *string*[]>                                                                           | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `result`                                                                                             | [components.IssuedCardAuthorizationEvent](../../models/components/issuedcardauthorizationevent.md)[] | :heavy_check_mark:                                                                                   | N/A                                                                                                  |