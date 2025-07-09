# UpdateTicketResponse

## Example Usage

```typescript
import { UpdateTicketResponse } from "@moovio/sdk/models/operations";

let value: UpdateTicketResponse = {
  headers: {
    "key": [],
    "key1": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    "key2": [
      "<value 1>",
      "<value 2>",
    ],
  },
  result: {
    ticketID: "<id>",
    number: 874811,
    title: "<value>",
    contact: {
      email: "Anjali_Schiller@yahoo.com",
    },
    status: "new",
    createdOn: new Date("2025-06-12T01:08:12.000Z"),
    updatedOn: new Date("2023-04-16T06:47:21.212Z"),
  },
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `headers`                                              | Record<string, *string*[]>                             | :heavy_check_mark:                                     | N/A                                                    |
| `result`                                               | [components.Ticket](../../models/components/ticket.md) | :heavy_check_mark:                                     | N/A                                                    |