# UpdateTicketRequest

## Example Usage

```typescript
import { UpdateTicketRequest } from "@moovio/sdk/models/operations";

let value: UpdateTicketRequest = {
  accountID: "<id>",
  ticketID: "<id>",
  updateTicket: {},
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `accountID`                                                        | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `ticketID`                                                         | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `updateTicket`                                                     | [components.UpdateTicket](../../models/components/updateticket.md) | :heavy_check_mark:                                                 | N/A                                                                |