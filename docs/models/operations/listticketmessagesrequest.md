# ListTicketMessagesRequest

## Example Usage

```typescript
import { ListTicketMessagesRequest } from "@moovio/sdk/models/operations";

let value: ListTicketMessagesRequest = {
  skip: 60,
  count: 20,
  accountID: "fe1a6a46-c625-4253-80e3-af7e4b1f7514",
  ticketID: "fe848530-1296-4d44-9e79-03f275a59866",
};
```

## Fields

| Field              | Type               | Required           | Description        | Example            |
| ------------------ | ------------------ | ------------------ | ------------------ | ------------------ |
| `skip`             | *number*           | :heavy_minus_sign: | N/A                | 60                 |
| `count`            | *number*           | :heavy_minus_sign: | N/A                | 20                 |
| `accountID`        | *string*           | :heavy_check_mark: | N/A                |                    |
| `ticketID`         | *string*           | :heavy_check_mark: | N/A                |                    |