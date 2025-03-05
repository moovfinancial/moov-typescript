# Wallet

A Moov wallet to store funds for transfers.

## Example Usage

```typescript
import { Wallet } from "@moovio/sdk/models/components";

let value: Wallet = {
  walletID: "6280f6d4-49c5-4b11-9148-4480d91f43db",
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