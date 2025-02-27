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
    walletID: "2ee770dc-67a7-4448-8f70-f4012a5ec5fa",
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