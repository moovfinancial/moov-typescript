# WebhookDataWalletTransactionUpdated

## Example Usage

```typescript
import { WebhookDataWalletTransactionUpdated } from "@moovio/sdk/models/components";

let value: WebhookDataWalletTransactionUpdated = {
  accountID: "<id>",
  walletID: "<id>",
  transactionID: "<id>",
  status: "failed",
  availableBalance: {
    currency: "USD",
    value: 1204,
    valueDecimal: "<value>",
  },
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `accountID`                                                                              | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `walletID`                                                                               | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `transactionID`                                                                          | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `status`                                                                                 | [components.WalletTransactionStatus](../../models/components/wallettransactionstatus.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `availableBalance`                                                                       | [components.WalletAvailableBalance](../../models/components/walletavailablebalance.md)   | :heavy_minus_sign:                                                                       | N/A                                                                                      |