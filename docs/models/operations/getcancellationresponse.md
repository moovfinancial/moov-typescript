# GetCancellationResponse

## Example Usage

```typescript
import { GetCancellationResponse } from "@moovio/sdk/models/operations";

let value: GetCancellationResponse = {
  headers: {
    "key": [
      "<value>",
    ],
  },
  result: {
    cancellationID: "<id>",
    status: "completed",
    createdOn: new Date("2024-02-19T03:41:15.084Z"),
  },
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `headers`                                                          | Record<string, *string*[]>                                         | :heavy_check_mark:                                                 | N/A                                                                |
| `result`                                                           | [components.Cancellation](../../models/components/cancellation.md) | :heavy_check_mark:                                                 | N/A                                                                |