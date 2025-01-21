# Wallet

A Moov wallet to store funds for transfers.

## Example Usage

```typescript
import { Wallet } from "moov-sdk/models/components";

let value: Wallet = {
  walletID: "9020e2d5-c541-447d-b7f8-06b3b80c8174",
  availableBalance: {
    currency: "Falkland Islands Pound",
    value: 941688,
    valueDecimal: "<value>",
  },
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `walletID`                                                                             | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `availableBalance`                                                                     | [components.WalletAvailableBalance](../../models/components/walletavailablebalance.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |