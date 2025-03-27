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
    status: "completed",
    createdOn: new Date("2024-11-14T05:12:25.110Z"),
  },
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `headers`                                                          | Record<string, *string*[]>                                         | :heavy_check_mark:                                                 | N/A                                                                |
| `result`                                                           | [components.Cancellation](../../models/components/cancellation.md) | :heavy_check_mark:                                                 | N/A                                                                |