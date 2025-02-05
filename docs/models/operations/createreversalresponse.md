# CreateReversalResponse

## Example Usage

```typescript
import { CreateReversalResponse } from "@moovio/sdk/models/operations";

let value: CreateReversalResponse = {
  headers: {
    "key": [
      "<value>",
    ],
  },
  result: {
    refund: {
      refundID: "a3b1923f-68a7-4b0a-b5e2-0083c03d0c1d",
      createdOn: new Date("2023-08-28T18:09:10.324Z"),
      updatedOn: new Date("2024-03-16T13:29:00.491Z"),
      status: "pending",
      amount: {
        currency: "USD",
        value: 1204,
      },
    },
  },
};
```

## Fields

| Field                      | Type                       | Required                   | Description                |
| -------------------------- | -------------------------- | -------------------------- | -------------------------- |
| `headers`                  | Record<string, *string*[]> | :heavy_check_mark:         | N/A                        |
| `result`                   | *components.Reversal*      | :heavy_check_mark:         | N/A                        |