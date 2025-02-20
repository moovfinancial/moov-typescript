# UpdateTransferRequest

## Example Usage

```typescript
import { UpdateTransferRequest } from "@moovio/sdk/models/operations";

let value: UpdateTransferRequest = {
  transferID: "0cce1eef-c44b-4aa5-a849-cb68c3377096",
  accountID: "e5134d8f-414f-4be9-b4f3-64a6ff1ecb5a",
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