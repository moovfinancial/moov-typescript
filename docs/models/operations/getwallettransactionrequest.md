# GetWalletTransactionRequest

## Example Usage

```typescript
import { GetWalletTransactionRequest } from "moov-sdk/models/operations";

let value: GetWalletTransactionRequest = {
  accountID: "6bf77843-7849-4cb2-ba06-7cebce745654",
  walletID: "facba22e-0acb-42a1-97a5-8f42e77f4c8b",
  transactionID: "62fb7700-c0cb-4a85-afe7-230d578c9167",
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `xMoovVersion`                                             | [components.Versions](../../models/components/versions.md) | :heavy_minus_sign:                                         | Specify an API version.                                    |
| `accountID`                                                | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `walletID`                                                 | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `transactionID`                                            | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |