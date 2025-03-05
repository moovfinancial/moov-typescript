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
    refundID: "7633b241-30b6-4674-9593-792486b37d2e",
    createdOn: new Date("2024-06-09T21:43:08.762Z"),
    updatedOn: new Date("2024-11-27T22:56:04.984Z"),
    status: "completed",
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