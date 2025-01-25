# GetWalletRequest

## Example Usage

```typescript
import { GetWalletRequest } from "@moovio/sdk/models/operations";

let value: GetWalletRequest = {
  accountID: "078c7030-fa00-43c6-b8de-6c32faae04b7",
  walletID: "72e0c073-f60c-45a6-974c-70f775a6be7a",
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `xMoovVersion`                                             | [components.Versions](../../models/components/versions.md) | :heavy_minus_sign:                                         | Specify an API version.                                    |
| `accountID`                                                | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `walletID`                                                 | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |