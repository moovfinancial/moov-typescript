# CreateTicketRequest

## Example Usage

```typescript
import { CreateTicketRequest } from "@moovio/sdk/models/operations";

let value: CreateTicketRequest = {
  accountID: "1734a7e6-5160-48a7-95cc-f48a24f67119",
  createTicket: {
    title: "<value>",
    body: "<value>",
    contact: {
      email: "Anjali_Schiller@yahoo.com",
    },
  },
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `accountID`                                                        | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `createTicket`                                                     | [components.CreateTicket](../../models/components/createticket.md) | :heavy_check_mark:                                                 | N/A                                                                |