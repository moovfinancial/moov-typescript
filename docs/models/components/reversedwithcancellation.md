# ReversedWithCancellation

## Example Usage

```typescript
import { ReversedWithCancellation } from "moov-sdk/models/components";

let value: ReversedWithCancellation = {
  cancellation: {
    status: "pending",
    createdOn: new Date("2025-02-07T19:37:59.654Z"),
  },
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `cancellation`                                                     | [components.Cancellation](../../models/components/cancellation.md) | :heavy_check_mark:                                                 | N/A                                                                |