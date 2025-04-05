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
    refundID: "921c5d8f-694d-4cb3-89fa-6a4d52cdf459",
    createdOn: new Date("2025-07-12T20:14:15.208Z"),
    updatedOn: new Date("2024-05-18T22:02:11.967Z"),
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