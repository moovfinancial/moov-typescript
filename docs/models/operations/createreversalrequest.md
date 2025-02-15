# CreateReversalRequest

## Example Usage

```typescript
import { CreateReversalRequest } from "@moovio/sdk/models/operations";

let value: CreateReversalRequest = {
  xIdempotencyKey: "f28493e7-6ce7-4c24-bbe1-2f1083495f3d",
  accountID: "7f41907d-634e-4a27-a98c-049812c8ad95",
  transferID: "24a00efe-3c71-4ccb-8ff2-cabfd6eebe7b",
  createReversal: {
    amount: 1000,
  },
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `xIdempotencyKey`                                                      | *string*                                                               | :heavy_check_mark:                                                     | Prevents duplicate reversals from being created.                       |
| `accountID`                                                            | *string*                                                               | :heavy_check_mark:                                                     | The Moov account ID.                                                   |
| `transferID`                                                           | *string*                                                               | :heavy_check_mark:                                                     | The transfer ID to reverse.                                            |
| `createReversal`                                                       | [components.CreateReversal](../../models/components/createreversal.md) | :heavy_minus_sign:                                                     | N/A                                                                    |