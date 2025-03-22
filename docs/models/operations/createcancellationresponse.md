# CreateCancellationResponse

## Example Usage

```typescript
import { CreateCancellationResponse } from "@moovio/sdk/models/operations";

let value: CreateCancellationResponse = {
  headers: {
    "key": [
      "<value>",
    ],
  },
  result: {
    cancellationID: "<id>",
    status: "failed",
    createdOn: new Date("2024-11-24T04:36:02.095Z"),
  },
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `headers`                                                          | Record<string, *string*[]>                                         | :heavy_check_mark:                                                 | N/A                                                                |
| `result`                                                           | [components.Cancellation](../../models/components/cancellation.md) | :heavy_check_mark:                                                 | N/A                                                                |