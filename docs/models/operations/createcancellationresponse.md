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
    status: "pending",
    createdOn: new Date("2025-11-12T01:21:46.772Z"),
  },
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `headers`                                                          | Record<string, *string*[]>                                         | :heavy_check_mark:                                                 | N/A                                                                |
| `result`                                                           | [components.Cancellation](../../models/components/cancellation.md) | :heavy_check_mark:                                                 | N/A                                                                |