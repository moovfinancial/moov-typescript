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
    walletID: "ec6bb509-fb38-468b-a7eb-597c090f8415",
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