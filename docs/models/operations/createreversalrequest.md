# CreateReversalRequest

## Example Usage

```typescript
import { CreateReversalRequest } from "@moovio/sdk/models/operations";

let value: CreateReversalRequest = {
  xIdempotencyKey: "e7b09b6d-748e-4af7-aaa3-b1923f68a7b0",
  accountID: "5e20083c-03d0-4c1d-9c36-7633b24130b6",
  transferID: "74593792-486b-437d-b2e7-7a8d224f18cd",
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