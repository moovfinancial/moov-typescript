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
    refundID: "a8f28493-e76c-4e7c-824b-e12f1083495f",
    createdOn: new Date("2025-08-06T08:12:15.326Z"),
    updatedOn: new Date("2025-08-17T05:51:35.005Z"),
    status: "pending",
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