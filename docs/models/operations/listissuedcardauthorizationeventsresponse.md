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
      eventID: "d602ab3c-484b-46c7-aae6-83b3befc8d76",
      eventType: "reversal",
      amount: "-14.89",
      result: "approved",
      createdOn: new Date("2024-02-06T03:57:51.650Z"),
    },
  ],
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `headers`                                                                                            | Record<string, *string*[]>                                                                           | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `result`                                                                                             | [components.IssuedCardAuthorizationEvent](../../models/components/issuedcardauthorizationevent.md)[] | :heavy_check_mark:                                                                                   | N/A                                                                                                  |