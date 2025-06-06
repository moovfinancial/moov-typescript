# WebhookDataWalletTransactionUpdated

## Example Usage

```typescript
import { WebhookDataWalletTransactionUpdated } from "@moovio/sdk/models/components";

let value: WebhookDataWalletTransactionUpdated = {
  accountID: "e491bd4d-7651-462a-9ebb-cd425ad33721",
  walletID: "33116a57-862b-43c9-aa42-3ee3b87d442d",
  transactionID: "378090e8-e3a0-4a6e-a96e-d2e5ca55e064",
  status: "canceled",
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