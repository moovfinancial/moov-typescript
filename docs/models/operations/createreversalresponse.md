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
      refundID: "b6d748ea-f7aa-43b1-8923-f68a7b0a5e20",
      createdOn: new Date("2024-07-26T07:33:30.803Z"),
      updatedOn: new Date("2023-08-24T21:54:03.774Z"),
      status: "failed",
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