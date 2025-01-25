# GetRefundRequest

## Example Usage

```typescript
import { GetRefundRequest } from "@moovio/sdk/models/operations";

let value: GetRefundRequest = {
  transferID: "597c090f-8415-4af1-934c-1e3bce3b5682",
  accountID: "f25c323f-66c1-42b5-bb09-821e802a797e",
  refundID: "ffb0f70f-9706-42b0-b80b-f018f69ce2ea",
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `xMoovVersion`                                             | [components.Versions](../../models/components/versions.md) | :heavy_minus_sign:                                         | Specify an API version.                                    |
| `transferID`                                               | *string*                                                   | :heavy_check_mark:                                         | Identifier for the transfer.                               |
| `accountID`                                                | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `refundID`                                                 | *string*                                                   | :heavy_check_mark:                                         | Identifier for the refund.                                 |