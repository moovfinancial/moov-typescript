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
    walletID: "a9eada54-56db-4ded-bff5-69b7ca9225f1",
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