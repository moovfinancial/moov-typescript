# GetWalletTransactionRequest

## Example Usage

```typescript
import { GetWalletTransactionRequest } from "@moovio/sdk/models/operations";

let value: GetWalletTransactionRequest = {
  accountID: "03dfb99a-055f-40b6-b152-0a0062751aaa",
  walletID: "0087f56d-9108-46ba-800d-29ffdee1d608",
  transactionID: "175e5d0f-040f-405a-a503-b6db91f849b7",
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `xMoovVersion`                                             | [components.Versions](../../models/components/versions.md) | :heavy_minus_sign:                                         | Specify an API version.                                    |
| `accountID`                                                | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `walletID`                                                 | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `transactionID`                                            | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |