# ReversedWithCancellation

## Example Usage

```typescript
import { ReversedWithCancellation } from "@moovio/sdk/models/components";

let value: ReversedWithCancellation = {
  cancellation: {
    cancellationID: "<id>",
    status: "pending",
    createdOn: new Date("2023-04-19T17:54:17.414Z"),
  },
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `cancellation`                                                     | [components.Cancellation](../../models/components/cancellation.md) | :heavy_check_mark:                                                 | N/A                                                                |