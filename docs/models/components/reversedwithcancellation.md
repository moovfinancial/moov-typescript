# ReversedWithCancellation

## Example Usage

```typescript
import { ReversedWithCancellation } from "@moovio/sdk/models/components";

let value: ReversedWithCancellation = {
  cancellation: {
    cancellationID: "<id>",
    status: "completed",
    createdOn: new Date("2024-04-10T11:10:19.891Z"),
  },
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `cancellation`                                                     | [components.Cancellation](../../models/components/cancellation.md) | :heavy_check_mark:                                                 | N/A                                                                |