# UpdateTransferRequest

## Example Usage

```typescript
import { UpdateTransferRequest } from "@moovio/sdk/models/operations";

let value: UpdateTransferRequest = {
  transferID: "4fea390b-9e9d-4585-8518-d9a4376b725d",
  accountID: "cf21bc09-6d36-4794-93e2-f26cd0906e5d",
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