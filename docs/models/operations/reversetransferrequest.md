# ReverseTransferRequest

## Example Usage

```typescript
import { ReverseTransferRequest } from "@moovio/sdk/models/operations";

let value: ReverseTransferRequest = {
  xIdempotencyKey: "483d3860-6c84-47ca-b183-fb1315d1249f",
  accountID: "3b87e922-e12a-43d6-8720-c1a884c62059",
  transferID: "b178d108-2907-4627-b71a-e9abef7f5be0",
  createReversal: {
    amount: 1000,
  },
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `xMoovVersion`                                                         | [components.Versions](../../models/components/versions.md)             | :heavy_minus_sign:                                                     | Specify an API version.                                                |
| `xIdempotencyKey`                                                      | *string*                                                               | :heavy_check_mark:                                                     | Prevents duplicate reversals from being created.                       |
| `accountID`                                                            | *string*                                                               | :heavy_check_mark:                                                     | The Moov account ID.                                                   |
| `transferID`                                                           | *string*                                                               | :heavy_check_mark:                                                     | The transfer ID to reverse.                                            |
| `createReversal`                                                       | [components.CreateReversal](../../models/components/createreversal.md) | :heavy_minus_sign:                                                     | N/A                                                                    |