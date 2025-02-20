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
      refundID: "e103320b-2715-46eb-ae72-698e94f27eb8",
      createdOn: new Date("2024-04-24T19:43:12.777Z"),
      updatedOn: new Date("2024-03-10T21:34:54.948Z"),
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