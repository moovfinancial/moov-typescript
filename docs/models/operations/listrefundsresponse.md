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
      refundID: "7c24be12-f108-4349-95f3-de7f41907d63",
      createdOn: new Date("2025-09-28T12:48:41.806Z"),
      updatedOn: new Date("2024-12-26T18:50:34.690Z"),
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