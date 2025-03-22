# UpdateTransferRequest

## Example Usage

```typescript
import { UpdateTransferRequest } from "@moovio/sdk/models/operations";

let value: UpdateTransferRequest = {
  transferID: "85056cb3-3aa8-4140-9cce-1eefc44baa58",
  accountID: "9cb68c33-7709-469e-b513-4d8f414fbe94",
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