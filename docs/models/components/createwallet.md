# CreateWallet

## Example Usage

```typescript
import { CreateWallet } from "@moovio/sdk/models/components";

let value: CreateWallet = {
  name: "My wallet",
  description: "A general wallet used for my payments",
  metadata: {
    "optional": "metadata",
  },
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `name`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | Name of the wallet.                                                                           |                                                                                               |
| `description`                                                                                 | *string*                                                                                      | :heavy_minus_sign:                                                                            | Description of the wallet.                                                                    |                                                                                               |
| `metadata`                                                                                    | Record<string, *string*>                                                                      | :heavy_minus_sign:                                                                            | Free-form key-value pair list. Useful for storing information that is not captured elsewhere. | {<br/>"optional": "metadata"<br/>}                                                            |