# CreateReversal

## Example Usage

```typescript
import { CreateReversal } from "moov-sdk/models/components";

let value: CreateReversal = {
  amount: 1000,
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                | Example                                                                                                    |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `amount`                                                                                                   | *number*                                                                                                   | :heavy_check_mark:                                                                                         | Amount to reverse in cents. Partial amounts will automatically trigger a refund instead of a cancellation. | 1000                                                                                                       |