# ReversedWithCancellation

## Example Usage

```typescript
import { ReversedWithCancellation } from "@moovio/sdk/models/components";

let value: ReversedWithCancellation = {
  cancellation: {
    cancellationID: "<id>",
    status: "failed",
    createdOn: new Date("2024-08-07T20:06:14.959Z"),
  },
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `cancellation`                                                     | [components.Cancellation](../../models/components/cancellation.md) | :heavy_check_mark:                                                 | N/A                                                                |