# Wallet

A Moov wallet to store funds for transfers.

## Example Usage

```typescript
import { Wallet } from "@moovio/sdk/models/components";

let value: Wallet = {
  walletID: "c7432f94-4fa2-4c6a-a921-c3b0f86c6a0e",
  availableBalance: {
    currency: "USD",
    value: 1204,
    valueDecimal: "<value>",
  },
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `walletID`                                                                             | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `availableBalance`                                                                     | [components.WalletAvailableBalance](../../models/components/walletavailablebalance.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |