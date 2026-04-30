# GetTicketResponse

## Example Usage

```typescript
import { GetTicketResponse } from "@moovio/sdk/models/operations";

let value: GetTicketResponse = {
  headers: {
    "key": [
      "<value 1>",
    ],
  },
  result: {
    ticketID: "<id>",
    number: 874811,
    title: "<value>",
    contact: {
      email: "Icie46@gmail.com",
    },
    status: "new",
    createdOn: new Date("2026-06-12T01:08:12.000Z"),
    updatedOn: new Date("2024-04-15T06:47:21.212Z"),
  },
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `headers`                                              | Record<string, *string*[]>                             | :heavy_check_mark:                                     | N/A                                                    |
| `result`                                               | [components.Ticket](../../models/components/ticket.md) | :heavy_check_mark:                                     | N/A                                                    |