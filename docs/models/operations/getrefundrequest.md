# GetRefundRequest

## Example Usage

```typescript
import { GetRefundRequest } from "@moovio/sdk/models/operations";

let value: GetRefundRequest = {
  transferID: "798c0498-12c8-4ad9-b582-4a00efe3c71c",
  accountID: "bff2cabf-d6ee-4be7-8b09-b6d748eaf7aa",
  refundID: "b1923f68-a7b0-4a5e-9200-83c03d0c1dc3",
};
```

## Fields

| Field                        | Type                         | Required                     | Description                  |
| ---------------------------- | ---------------------------- | ---------------------------- | ---------------------------- |
| `transferID`                 | *string*                     | :heavy_check_mark:           | Identifier for the transfer. |
| `accountID`                  | *string*                     | :heavy_check_mark:           | N/A                          |
| `refundID`                   | *string*                     | :heavy_check_mark:           | Identifier for the refund.   |