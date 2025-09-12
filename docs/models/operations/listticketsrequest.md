# ListTicketsRequest

## Example Usage

```typescript
import { ListTicketsRequest } from "@moovio/sdk/models/operations";

let value: ListTicketsRequest = {
  count: 20,
  accountID: "23366ec4-e91c-4f23-9260-5483dd81cbdc",
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        | Example                                                            |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `cursor`                                                           | *string*                                                           | :heavy_minus_sign:                                                 | N/A                                                                |                                                                    |
| `count`                                                            | *number*                                                           | :heavy_minus_sign:                                                 | N/A                                                                | 20                                                                 |
| `status`                                                           | [components.TicketStatus](../../models/components/ticketstatus.md) | :heavy_minus_sign:                                                 | N/A                                                                |                                                                    |
| `foreignID`                                                        | *string*                                                           | :heavy_minus_sign:                                                 | N/A                                                                |                                                                    |
| `accountID`                                                        | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |                                                                    |