# ListWalletsResponse

## Example Usage

```typescript
import { ListWalletsResponse } from "@moovio/sdk/models/operations";

let value: ListWalletsResponse = {
  headers: {
    "key": [
      "<value>",
    ],
  },
  result: [
    {
      walletID: "cccc1e63-95bb-4dfc-82c9-95220cbdb2b8",
      availableBalance: {
        currency: "USD",
        value: 1204,
        valueDecimal: "<value>",
      },
    },
  ],
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `headers`                                                | Record<string, *string*[]>                               | :heavy_check_mark:                                       | N/A                                                      |
| `result`                                                 | [components.Wallet](../../models/components/wallet.md)[] | :heavy_check_mark:                                       | N/A                                                      |