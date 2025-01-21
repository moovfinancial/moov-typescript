# GetTransferRequest

## Example Usage

```typescript
import { GetTransferRequest } from "moov-sdk/models/operations";

let value: GetTransferRequest = {
  transferID: "5a6be7a4-aa82-4b56-bda1-91a6dcf42295",
  accountID: "1c7a98b8-e8ec-4de3-95e2-7129668a7537",
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `xMoovVersion`                                             | [components.Versions](../../models/components/versions.md) | :heavy_minus_sign:                                         | Specify an API version.                                    |
| `transferID`                                               | *string*                                                   | :heavy_check_mark:                                         | Identifier for the transfer.                               |
| `accountID`                                                | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |