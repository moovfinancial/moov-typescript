# GetWalletRequest

## Example Usage

```typescript
import { GetWalletRequest } from "moov-sdk/models/operations";

let value: GetWalletRequest = {
  accountID: "5f66e277-b6da-4e4c-b1cd-6bf2905289ff",
  walletID: "9e5388e0-d9fb-45a5-be08-8364acc63489",
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `xMoovVersion`                                             | [components.Versions](../../models/components/versions.md) | :heavy_minus_sign:                                         | Specify an API version.                                    |
| `accountID`                                                | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `walletID`                                                 | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |