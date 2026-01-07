# CreateCancellationResponse

## Example Usage

```typescript
import { CreateCancellationResponse } from "@moovio/sdk/models/operations";

let value: CreateCancellationResponse = {
  headers: {},
  result: {
    cancellationID: "<id>",
    status: "failed",
    createdOn: new Date("2024-04-14T07:51:43.353Z"),
  },
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `headers`                                                          | Record<string, *string*[]>                                         | :heavy_check_mark:                                                 | N/A                                                                |
| `result`                                                           | [components.Cancellation](../../models/components/cancellation.md) | :heavy_check_mark:                                                 | N/A                                                                |