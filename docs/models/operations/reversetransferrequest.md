# ReverseTransferRequest

## Example Usage

```typescript
import { ReverseTransferRequest } from "moov-sdk/models/operations";

let value: ReverseTransferRequest = {
  xIdempotencyKey: "b46f9ab7-67d5-4e04-bee3-3c5334d72551",
  accountID: "b6b5e817-505f-44b2-8240-7f4adf0d15b5",
  transferID: "b876ae66-53d3-48c0-a861-d65a7585cccc",
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