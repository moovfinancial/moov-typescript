# Wallet

A Moov wallet to store funds for transfers.

## Example Usage

```typescript
import { Wallet } from "@moovio/sdk/models/components";

let value: Wallet = {
  walletID: "5c79a581-dfe0-4dd2-ab0c-cf6768dd0a99",
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