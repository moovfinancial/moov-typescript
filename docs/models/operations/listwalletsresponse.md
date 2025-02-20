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
      walletID: "f96e5b2b-763f-4136-b2ee-770dc67a7448",
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