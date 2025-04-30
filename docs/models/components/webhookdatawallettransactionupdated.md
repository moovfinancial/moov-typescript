# WebhookDataWalletTransactionUpdated

## Example Usage

```typescript
import { WebhookDataWalletTransactionUpdated } from "@moovio/sdk/models/components";

let value: WebhookDataWalletTransactionUpdated = {
  accountID: "bcec8d51-2e3a-4f59-80ac-368652b28df2",
  walletID: "ddf3f2e4-5f45-4449-8283-980fa5d96bd4",
  transactionID: "2461feb3-5797-41ca-b13d-9184a7428db4",
  status: "pending",
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `accountID`                                                                                          | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `walletID`                                                                                           | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `transactionID`                                                                                      | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `status`                                                                                             | [components.WalletTransactionStatus](../../models/components/wallettransactionstatus.md)             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `availableBalance`                                                                                   | [components.WebhookWalletAvailableBalance](../../models/components/webhookwalletavailablebalance.md) | :heavy_minus_sign:                                                                                   | The available balance of a wallet.                                                                   |