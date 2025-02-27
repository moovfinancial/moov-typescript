# UpdateTransferRequest

## Example Usage

```typescript
import { UpdateTransferRequest } from "@moovio/sdk/models/operations";

let value: UpdateTransferRequest = {
  transferID: "8443533f-7a59-479b-aac2-1573cbeb1a64",
  accountID: "489805c5-8533-4bae-86a7-7d7e911f6962",
  patchTransfer: {
    metadata: {
      "optional": "metadata",
    },
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `transferID`                                                         | *string*                                                             | :heavy_check_mark:                                                   | Identifier for the transfer.                                         |
| `accountID`                                                          | *string*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `patchTransfer`                                                      | [components.PatchTransfer](../../models/components/patchtransfer.md) | :heavy_check_mark:                                                   | N/A                                                                  |