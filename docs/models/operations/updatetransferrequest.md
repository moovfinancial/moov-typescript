# UpdateTransferRequest

## Example Usage

```typescript
import { UpdateTransferRequest } from "@moovio/sdk/models/operations";

let value: UpdateTransferRequest = {
  transferID: "cbeb1a64-9489-4805-bc58-533bae6a77d7",
  accountID: "911f6962-2398-4505-b6cb-33aa8140cce1",
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