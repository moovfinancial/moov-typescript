# ListWalletsResponse

## Example Usage

```typescript
import { ListWalletsResponse } from "@moovio/sdk/models/operations";

let value: ListWalletsResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
  },
  result: [
    {
      walletID: "943099b1-acb6-4585-a5a1-36e9e5174c52",
      availableBalance: {
        currency: "USD",
        value: 1204,
        valueDecimal: "<value>",
      },
      partnerAccountID: "d10f1ad9-bc78-4ead-a8ff-c5be4fe3c3d5",
      name: "<value>",
      status: "active",
      walletType: "default",
      description:
        "unaccountably satisfy cinder where circa sneak yuck unselfish",
      metadata: {
        "optional": "metadata",
      },
      createdOn: new Date("2024-05-31T03:38:49.947Z"),
    },
  ],
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `headers`                                                | Record<string, *string*[]>                               | :heavy_check_mark:                                       | N/A                                                      |
| `result`                                                 | [components.Wallet](../../models/components/wallet.md)[] | :heavy_check_mark:                                       | N/A                                                      |