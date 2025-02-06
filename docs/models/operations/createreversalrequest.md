# CreateReversalRequest

## Example Usage

```typescript
import { CreateReversalRequest } from "@moovio/sdk/models/operations";

let value: CreateReversalRequest = {
  xIdempotencyKey: "2798c049-812c-48ad-b958-24a00efe3c71",
  accountID: "cbff2cab-fd6e-4ebe-a7b0-9b6d748eaf7a",
  transferID: "3b1923f6-8a7b-40a5-8e20-083c03d0c1dc",
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