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
      refundID: "4c198636-db7f-4c0c-9b0e-737d4e1198a0",
      createdOn: new Date("2025-02-09T15:31:03.717Z"),
      updatedOn: new Date("2024-01-13T11:08:19.872Z"),
      status: "pending",
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