# ListTicketsResponse

## Example Usage

```typescript
import { ListTicketsResponse } from "@moovio/sdk/models/operations";

let value: ListTicketsResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    "key1": [
      "<value 1>",
      "<value 2>",
    ],
  },
  result: [
    {
      ticketID: "<id>",
      number: 100774,
      title: "<value>",
      contact: {
        email: "Anjali_Schiller@yahoo.com",
      },
      status: "new",
      createdOn: new Date("2025-01-23T03:56:46.678Z"),
      updatedOn: new Date("2023-10-06T19:06:14.147Z"),
    },
  ],
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `headers`                                                | Record<string, *string*[]>                               | :heavy_check_mark:                                       | N/A                                                      |
| `result`                                                 | [components.Ticket](../../models/components/ticket.md)[] | :heavy_check_mark:                                       | N/A                                                      |