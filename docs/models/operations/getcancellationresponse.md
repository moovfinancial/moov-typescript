# GetCancellationResponse

## Example Usage

```typescript
import { GetCancellationResponse } from "@moovio/sdk/models/operations";

let value: GetCancellationResponse = {
  headers: {
    "key": [],
  },
  result: {
    cancellationID: "<id>",
    status: "failed",
    createdOn: new Date("2023-04-15T07:51:43.353Z"),
  },
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `headers`                                                          | Record<string, *string*[]>                                         | :heavy_check_mark:                                                 | N/A                                                                |
| `result`                                                           | [components.Cancellation](../../models/components/cancellation.md) | :heavy_check_mark:                                                 | N/A                                                                |