# UpdateWalletResponse

## Example Usage

```typescript
import { UpdateWalletResponse } from "@moovio/sdk/models/operations";

let value: UpdateWalletResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
    ],
    "key1": [],
    "key2": [
      "<value 1>",
      "<value 2>",
    ],
  },
  result: {
    walletID: "f033a163-aef4-4033-976a-2bf12addd99a",
    availableBalance: {
      currency: "USD",
      value: 1204,
      valueDecimal: "<value>",
    },
    partnerAccountID: "81a2634f-e135-42ec-ae6e-01511d21a84b",
    name: "<value>",
    status: "active",
    walletType: "general",
    description:
      "formula serene gazebo wherever hence triumphantly indeed scent",
    metadata: {
      "optional": "metadata",
    },
    createdOn: new Date("2025-01-14T00:19:42.627Z"),
  },
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `headers`                                              | Record<string, *string*[]>                             | :heavy_check_mark:                                     | N/A                                                    |
| `result`                                               | [components.Wallet](../../models/components/wallet.md) | :heavy_check_mark:                                     | N/A                                                    |