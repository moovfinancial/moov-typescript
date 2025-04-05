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
      walletID: "f9c2f943-099b-41ac-9b65-855a136e9e51",
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