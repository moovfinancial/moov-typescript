# GetRefundResponse

## Example Usage

```typescript
import { GetRefundResponse } from "@moovio/sdk/models/operations";

let value: GetRefundResponse = {
  headers: {
    "key": [
      "<value>",
    ],
  },
  result: {
    refundID: "af7aa3b1-923f-468a-87b0-a5e20083c03d",
    createdOn: new Date("2025-05-13T05:22:03.123Z"),
    updatedOn: new Date("2023-05-03T11:52:05.226Z"),
    status: "failed",
    amount: {
      currency: "USD",
      value: 1204,
    },
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `headers`                                                                        | Record<string, *string*[]>                                                       | :heavy_check_mark:                                                               | N/A                                                                              |
| `result`                                                                         | [components.CardAcquiringRefund](../../models/components/cardacquiringrefund.md) | :heavy_check_mark:                                                               | N/A                                                                              |