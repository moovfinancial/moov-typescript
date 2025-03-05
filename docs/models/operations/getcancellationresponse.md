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
    status: "pending",
    createdOn: new Date("2023-08-13T15:30:37.197Z"),
  },
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `headers`                                                          | Record<string, *string*[]>                                         | :heavy_check_mark:                                                 | N/A                                                                |
| `result`                                                           | [components.Cancellation](../../models/components/cancellation.md) | :heavy_check_mark:                                                 | N/A                                                                |