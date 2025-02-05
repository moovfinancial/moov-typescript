# ListRefundsRequest

## Example Usage

```typescript
import { ListRefundsRequest } from "@moovio/sdk/models/operations";

let value: ListRefundsRequest = {
  accountID: "cc03a705-af32-458a-9530-213516296ac1",
  transferID: "f077d4c0-75c6-41b0-857b-51d0d1222cc2",
};
```

## Fields

| Field                        | Type                         | Required                     | Description                  |
| ---------------------------- | ---------------------------- | ---------------------------- | ---------------------------- |
| `accountID`                  | *string*                     | :heavy_check_mark:           | N/A                          |
| `transferID`                 | *string*                     | :heavy_check_mark:           | Identifier for the transfer. |