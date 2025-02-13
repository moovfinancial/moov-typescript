# GetRefundRequest

## Example Usage

```typescript
import { GetRefundRequest } from "@moovio/sdk/models/operations";

let value: GetRefundRequest = {
  transferID: "dcbaf027-44f0-40e2-a07e-4ed46e103320",
  accountID: "27156ebe-7269-48e9-84f2-7eb8b76abedf",
  refundID: "f31aafc6-99c9-46a3-851d-14e83fe13a38",
};
```

## Fields

| Field                        | Type                         | Required                     | Description                  |
| ---------------------------- | ---------------------------- | ---------------------------- | ---------------------------- |
| `transferID`                 | *string*                     | :heavy_check_mark:           | Identifier for the transfer. |
| `accountID`                  | *string*                     | :heavy_check_mark:           | N/A                          |
| `refundID`                   | *string*                     | :heavy_check_mark:           | Identifier for the refund.   |