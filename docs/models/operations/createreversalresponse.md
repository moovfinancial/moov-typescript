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
    cancellation: {
      cancellationID: "<id>",
      status: "pending",
      createdOn: new Date("2025-04-30T10:22:46.232Z"),
    },
  },
};
```

## Fields

| Field                      | Type                       | Required                   | Description                |
| -------------------------- | -------------------------- | -------------------------- | -------------------------- |
| `headers`                  | Record<string, *string*[]> | :heavy_check_mark:         | N/A                        |
| `result`                   | *components.Reversal*      | :heavy_check_mark:         | N/A                        |