# GetRefundRequest

## Example Usage

```typescript
import { GetRefundRequest } from "moov-sdk/models/operations";

let value: GetRefundRequest = {
  transferID: "ccc2a70d-30a2-40e2-9850-557bf8f89294",
  accountID: "6a94037e-9e97-45f7-a5ec-9971a60b2c49",
  refundID: "27df0290-c9a9-4913-975c-a4fade360298",
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `xMoovVersion`                                             | [components.Versions](../../models/components/versions.md) | :heavy_minus_sign:                                         | Specify an API version.                                    |
| `transferID`                                               | *string*                                                   | :heavy_check_mark:                                         | Identifier for the transfer.                               |
| `accountID`                                                | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `refundID`                                                 | *string*                                                   | :heavy_check_mark:                                         | Identifier for the refund.                                 |