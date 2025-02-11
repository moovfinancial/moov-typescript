# GetRefundRequest

## Example Usage

```typescript
import { GetRefundRequest } from "@moovio/sdk/models/operations";

let value: GetRefundRequest = {
  transferID: "54dcbaf0-2744-4f00-8e20-7e4ed46e1033",
  accountID: "0b27156e-be72-4698-be94-f27eb8b76abe",
  refundID: "f1f31aaf-c699-4c96-8a35-1d14e83fe13a",
};
```

## Fields

| Field                        | Type                         | Required                     | Description                  |
| ---------------------------- | ---------------------------- | ---------------------------- | ---------------------------- |
| `transferID`                 | *string*                     | :heavy_check_mark:           | Identifier for the transfer. |
| `accountID`                  | *string*                     | :heavy_check_mark:           | N/A                          |
| `refundID`                   | *string*                     | :heavy_check_mark:           | Identifier for the refund.   |