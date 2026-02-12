# UpdateWalletRequest

## Example Usage

```typescript
import { UpdateWalletRequest } from "@moovio/sdk/models/operations";

let value: UpdateWalletRequest = {
  walletID: "<id>",
  accountID: "<id>",
  patchWallet: {
    name: "My second wallet",
    description: "My new description",
    metadata: {
      "optional": "metadata",
    },
  },
};
```

## Fields

| Field                                                                                                       | Type                                                                                                        | Required                                                                                                    | Description                                                                                                 | Example                                                                                                     |
| ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| `walletID`                                                                                                  | *string*                                                                                                    | :heavy_check_mark:                                                                                          | Identifier for the wallet.                                                                                  |                                                                                                             |
| `accountID`                                                                                                 | *string*                                                                                                    | :heavy_check_mark:                                                                                          | The Moov account ID the wallet belongs to.                                                                  |                                                                                                             |
| `patchWallet`                                                                                               | [components.PatchWallet](../../models/components/patchwallet.md)                                            | :heavy_check_mark:                                                                                          | N/A                                                                                                         | {<br/>"name": "My second wallet",<br/>"description": "My new description",<br/>"metadata": {<br/>"optional": "metadata"<br/>}<br/>} |