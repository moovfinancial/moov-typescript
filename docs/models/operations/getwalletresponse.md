# GetWalletResponse

## Example Usage

```typescript
import { GetWalletResponse } from "@moovio/sdk/models/operations";

let value: GetWalletResponse = {
  headers: {
    "key": [
      "<value>",
    ],
  },
  result: {
    walletID: "825f25c3-23f6-46c1-a2b5-b09821e802a7",
    availableBalance: {
      currency: "USD",
      value: 1204,
      valueDecimal: "<value>",
    },
  },
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `headers`                                              | Record<string, *string*[]>                             | :heavy_check_mark:                                     | N/A                                                    |
| `result`                                               | [components.Wallet](../../models/components/wallet.md) | :heavy_check_mark:                                     | N/A                                                    |