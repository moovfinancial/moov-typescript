# CreateReversalRequest

## Example Usage

```typescript
import { CreateReversalRequest } from "@moovio/sdk/models/operations";

let value: CreateReversalRequest = {
  xIdempotencyKey: "<value>",
  accountID: "<id>",
  transferID: "<id>",
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `xIdempotencyKey`                                                      | *string*                                                               | :heavy_check_mark:                                                     | Prevents duplicate reversals from being created.                       |
| `accountID`                                                            | *string*                                                               | :heavy_check_mark:                                                     | The Moov account ID.                                                   |
| `transferID`                                                           | *string*                                                               | :heavy_check_mark:                                                     | The transfer ID to reverse.                                            |
| `createReversal`                                                       | [components.CreateReversal](../../models/components/createreversal.md) | :heavy_minus_sign:                                                     | N/A                                                                    |