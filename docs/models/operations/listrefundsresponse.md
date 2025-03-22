# ListRefundsResponse

## Example Usage

```typescript
import { ListRefundsResponse } from "@moovio/sdk/models/operations";

let value: ListRefundsResponse = {
  headers: {
    "key": [
      "<value>",
    ],
  },
  result: [
    {
      refundID: "71ccbff2-cabf-4d6e-bebe-7b09b6d748ea",
      createdOn: new Date("2024-05-05T14:10:38.760Z"),
      updatedOn: new Date("2024-12-22T16:38:40.411Z"),
      status: "completed",
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