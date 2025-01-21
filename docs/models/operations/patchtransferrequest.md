# PatchTransferRequest

## Example Usage

```typescript
import { PatchTransferRequest } from "moov-sdk/models/operations";

let value: PatchTransferRequest = {
  transferID: "d099fe84-03df-4b99-9a05-5f0b61520a00",
  accountID: "2751aaad-0087-4f56-bd91-086ba00d29ff",
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `xMoovVersion`                                             | [components.Versions](../../models/components/versions.md) | :heavy_minus_sign:                                         | Specify an API version.                                    |
| `transferID`                                               | *string*                                                   | :heavy_check_mark:                                         | Identifier for the transfer.                               |
| `accountID`                                                | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |