# ListRefundsRequest

## Example Usage

```typescript
import { ListRefundsRequest } from "moov-sdk/models/operations";

let value: ListRefundsRequest = {
  accountID: "c1e6395b-bdfc-42c9-a952-20cbdb2b81ee",
  transferID: "631cf071-6960-4fec-a6bb-509fb3868b7e",
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `xMoovVersion`                                             | [components.Versions](../../models/components/versions.md) | :heavy_minus_sign:                                         | Specify an API version.                                    |
| `accountID`                                                | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `transferID`                                               | *string*                                                   | :heavy_check_mark:                                         | Identifier for the transfer.                               |