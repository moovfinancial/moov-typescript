# GetRefundRequest

## Example Usage

```typescript
import { GetRefundRequest } from "@moovio/sdk/models/operations";

let value: GetRefundRequest = {
  transferID: "3b1923f6-8a7b-40a5-8e20-083c03d0c1dc",
  accountID: "67633b24-130b-4667-b459-3792486b37d2",
  refundID: "77a8d224-f18c-4dff-9838-b74dd898ce0f",
};
```

## Fields

| Field                        | Type                         | Required                     | Description                  |
| ---------------------------- | ---------------------------- | ---------------------------- | ---------------------------- |
| `transferID`                 | *string*                     | :heavy_check_mark:           | Identifier for the transfer. |
| `accountID`                  | *string*                     | :heavy_check_mark:           | N/A                          |
| `refundID`                   | *string*                     | :heavy_check_mark:           | Identifier for the refund.   |