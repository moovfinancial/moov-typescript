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
    walletID: "995f6aaa-4d96-4519-bc6e-27a9eada5456",
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