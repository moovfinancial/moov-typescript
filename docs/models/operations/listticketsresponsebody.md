# ListTicketsResponseBody

A paginated list of items. The `nextPage` field is omitted if there are no more pages available.

## Example Usage

```typescript
import { ListTicketsResponseBody } from "@moovio/sdk/models/operations";

let value: ListTicketsResponseBody = {
  items: [],
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `items`                                                                    | [components.Ticket](../../models/components/ticket.md)[]                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `nextPage`                                                                 | [components.ItemListNextPage](../../models/components/itemlistnextpage.md) | :heavy_minus_sign:                                                         | N/A                                                                        |