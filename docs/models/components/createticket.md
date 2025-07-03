# CreateTicket

Request to create a new support ticket.

## Example Usage

```typescript
import { CreateTicket } from "@moovio/sdk/models/components";

let value: CreateTicket = {
  title: "<value>",
  body: "<value>",
  contact: {
    email: "Anjali_Schiller@yahoo.com",
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `title`                                                              | *string*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `body`                                                               | *string*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `contact`                                                            | [components.TicketContact](../../models/components/ticketcontact.md) | :heavy_check_mark:                                                   | N/A                                                                  |