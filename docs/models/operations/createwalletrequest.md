# CreateWalletRequest

## Example Usage

```typescript
import { CreateWalletRequest } from "@moovio/sdk/models/operations";

let value: CreateWalletRequest = {
  accountID: "<id>",
  createWallet: {
    name: "My wallet",
    description: "A general wallet used for my payments",
    metadata: {
      "optional": "metadata",
    },
  },
};
```

## Fields

| Field                                                                                                                   | Type                                                                                                                    | Required                                                                                                                | Description                                                                                                             | Example                                                                                                                 |
| ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `accountID`                                                                                                             | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | The Moov account ID the wallet belongs to.                                                                              |                                                                                                                         |
| `createWallet`                                                                                                          | [components.CreateWallet](../../models/components/createwallet.md)                                                      | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     | {<br/>"name": "My wallet",<br/>"description": "A general wallet used for my payments",<br/>"metadata": {<br/>"optional": "metadata"<br/>}<br/>} |