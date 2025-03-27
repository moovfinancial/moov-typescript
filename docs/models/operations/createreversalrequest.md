# CreateReversalRequest

## Example Usage

```typescript
import { CreateReversalRequest } from "@moovio/sdk/models/operations";

let value: CreateReversalRequest = {
  xIdempotencyKey: "c268233b-f282-4006-86a6-3193603a1add",
  accountID: "7ebd67e6-a6b9-4789-beab-f135f39144b1",
  transferID: "4b56218a-1202-43b1-8a62-f84059394065",
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