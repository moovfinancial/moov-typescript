# GetTransferRequest

## Example Usage

```typescript
import { GetTransferRequest } from "@moovio/sdk/models/operations";

let value: GetTransferRequest = {
  transferID: "12023b1a-62f8-4405-b939-4065386f953a",
  accountID: "adaf6c80-06ad-40fe-ada7-c342f3b701eb",
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `xMoovVersion`                                             | [components.Versions](../../models/components/versions.md) | :heavy_minus_sign:                                         | Specify an API version.                                    |
| `transferID`                                               | *string*                                                   | :heavy_check_mark:                                         | Identifier for the transfer.                               |
| `accountID`                                                | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |