# GetSweepRequest

## Example Usage

```typescript
import { GetSweepRequest } from "moov-sdk/models/operations";

let value: GetSweepRequest = {
  accountID: "e7c24be1-2f10-4834-895f-3de7f41907d6",
  walletID: "4ea2798c-0498-412c-b8ad-95824a00efe3",
  sweepID: "71ccbff2-cabf-4d6e-bebe-7b09b6d748ea",
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `xMoovVersion`                                             | [components.Versions](../../models/components/versions.md) | :heavy_minus_sign:                                         | Specify an API version.                                    |
| `accountID`                                                | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `walletID`                                                 | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `sweepID`                                                  | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |