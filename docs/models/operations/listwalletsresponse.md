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
      walletID: "f30e4f34-ed19-4219-a179-fe98aef0fc1c",
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