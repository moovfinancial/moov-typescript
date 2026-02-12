# CreateTicketRequest

## Example Usage

```typescript
import { CreateTicketRequest } from "@moovio/sdk/models/operations";

let value: CreateTicketRequest = {
  accountID: "<id>",
  createTicket: {
    title: "<value>",
    body: "<value>",
    contact: {
      email: "Icie46@gmail.com",
    },
  },
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `accountID`                                                        | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `createTicket`                                                     | [components.CreateTicket](../../models/components/createticket.md) | :heavy_check_mark:                                                 | N/A                                                                |