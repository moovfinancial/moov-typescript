# Wallet

A Moov wallet to store funds for transfers.

## Example Usage

```typescript
import { Wallet } from "@moovio/sdk/models/components";

let value: Wallet = {
  walletID: "864f4afb-aca6-43fa-8060-d383aac8dc8d",
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