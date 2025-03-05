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
      refundID: "789eabf1-35f3-4914-84b1-c4b56218a120",
      createdOn: new Date("2023-09-01T22:40:44.792Z"),
      updatedOn: new Date("2025-01-27T00:15:15.202Z"),
      status: "created",
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