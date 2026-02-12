# CreateWalletResponse

## Example Usage

```typescript
import { CreateWalletResponse } from "@moovio/sdk/models/operations";

let value: CreateWalletResponse = {
  headers: {},
  result: {
    walletID: "<id>",
    availableBalance: {
      currency: "USD",
      value: 1204,
      valueDecimal: "<value>",
    },
    partnerAccountID: "<id>",
    name: "<value>",
    status: "closed",
    walletType: "default",
    description: "who concerning rightfully ignorant",
    metadata: {
      "optional": "metadata",
    },
    createdOn: new Date("2025-08-14T11:36:28.146Z"),
  },
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `headers`                                              | Record<string, *string*[]>                             | :heavy_check_mark:                                     | N/A                                                    |
| `result`                                               | [components.Wallet](../../models/components/wallet.md) | :heavy_check_mark:                                     | N/A                                                    |