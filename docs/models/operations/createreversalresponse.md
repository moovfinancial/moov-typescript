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
      refundID: "838b74dd-898c-4e0f-b565-db260c31a382",
      createdOn: new Date("2025-12-12T05:49:53.787Z"),
      updatedOn: new Date("2023-04-28T19:28:15.954Z"),
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