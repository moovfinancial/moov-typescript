# GetRefundResponse

## Example Usage

```typescript
import { GetRefundResponse } from "@moovio/sdk/models/operations";

let value: GetRefundResponse = {
  headers: {},
  result: {
    refundID: "c5d8f694-dcb3-49fa-86a4-d52cdf4592d7",
    createdOn: new Date("2023-04-30T04:25:03.302Z"),
    updatedOn: new Date("2024-03-21T13:50:26.204Z"),
    status: "created",
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