# PatchTransferRequest

## Example Usage

```typescript
import { PatchTransferRequest } from "@moovio/sdk/models/operations";

let value: PatchTransferRequest = {
  transferID: "30c432c9-aeea-4f30-be4f-34ed19219179",
  accountID: "e98aef0f-c1ca-4e78-8d78-35409dc397d5",
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `xMoovVersion`                                             | [components.Versions](../../models/components/versions.md) | :heavy_minus_sign:                                         | Specify an API version.                                    |
| `transferID`                                               | *string*                                                   | :heavy_check_mark:                                         | Identifier for the transfer.                               |
| `accountID`                                                | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |