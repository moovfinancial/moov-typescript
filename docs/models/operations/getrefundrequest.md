# GetRefundRequest

## Example Usage

```typescript
import { GetRefundRequest } from "@moovio/sdk/models/operations";

let value: GetRefundRequest = {
  transferID: "0cb0e737-d4e1-4198-9a04-b54dcbaf0274",
  accountID: "f00e207e-4ed4-46e1-8033-20b27156ebe7",
  refundID: "698e94f2-7eb8-4b76-aabe-df1f31aafc69",
};
```

## Fields

| Field                        | Type                         | Required                     | Description                  |
| ---------------------------- | ---------------------------- | ---------------------------- | ---------------------------- |
| `transferID`                 | *string*                     | :heavy_check_mark:           | Identifier for the transfer. |
| `accountID`                  | *string*                     | :heavy_check_mark:           | N/A                          |
| `refundID`                   | *string*                     | :heavy_check_mark:           | Identifier for the refund.   |