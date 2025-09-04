# ListWalletsRequest

## Example Usage

```typescript
import { ListWalletsRequest } from "@moovio/sdk/models/operations";

let value: ListWalletsRequest = {
  skip: 60,
  count: 20,
  accountID: "cc70c463-f3a3-4c1f-8efb-26d0759df41f",
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        | Example                                                            |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `status`                                                           | [components.WalletStatus](../../models/components/walletstatus.md) | :heavy_minus_sign:                                                 | Optional parameter for filtering wallets by status.                |                                                                    |
| `walletType`                                                       | [components.WalletType](../../models/components/wallettype.md)     | :heavy_minus_sign:                                                 | Optional parameter for filtering wallets by type.                  |                                                                    |
| `skip`                                                             | *number*                                                           | :heavy_minus_sign:                                                 | N/A                                                                | 60                                                                 |
| `count`                                                            | *number*                                                           | :heavy_minus_sign:                                                 | N/A                                                                | 20                                                                 |
| `accountID`                                                        | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |                                                                    |