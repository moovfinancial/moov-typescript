# ListRefundsResponse

## Example Usage

```typescript
import { ListRefundsResponse } from "@moovio/sdk/models/operations";

let value: ListRefundsResponse = {
  headers: {
    "key": [],
    "key1": [
      "<value 1>",
      "<value 2>",
    ],
    "key2": [
      "<value 1>",
      "<value 2>",
    ],
  },
  result: [
    {
      refundID: "c99ec072-5acd-4ee3-996d-309746950e23",
      createdOn: new Date("2026-09-25T02:21:45.824Z"),
      updatedOn: new Date("2024-12-16T11:24:33.349Z"),
      status: "created",
      amount: {
        currency: "USD",
        value: 1204,
      },
    },
  ],
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `headers`                                                                          | Record<string, *string*[]>                                                         | :heavy_check_mark:                                                                 | N/A                                                                                |
| `result`                                                                           | [components.CardAcquiringRefund](../../models/components/cardacquiringrefund.md)[] | :heavy_check_mark:                                                                 | N/A                                                                                |