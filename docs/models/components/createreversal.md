# CreateReversal

## Example Usage

```typescript
import { CreateReversal } from "@moovio/sdk/models/components";

let value: CreateReversal = {
  amount: 250805,
};
```

## Fields

| Field                                                                                                                                              | Type                                                                                                                                               | Required                                                                                                                                           | Description                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `amount`                                                                                                                                           | *number*                                                                                                                                           | :heavy_check_mark:                                                                                                                                 | Amount to reverse. Before v2026.10, specify the amount in integer cents. Partial amounts automatically trigger a refund instead of a cancellation. |