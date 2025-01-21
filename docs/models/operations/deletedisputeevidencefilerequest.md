# DeleteDisputeEvidenceFileRequest

## Example Usage

```typescript
import { DeleteDisputeEvidenceFileRequest } from "moov-sdk/models/operations";

let value: DeleteDisputeEvidenceFileRequest = {
  accountID: "71162e36-85a9-4fd9-b799-428460a0b329",
  disputeID: "6d08a620-6bf7-4451-97a9-0aa8f4d243ec",
  evidenceID: "60bfc346-63cc-4b0e-950a-ba6d58eb1ced",
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `xMoovVersion`                                             | [components.Versions](../../models/components/versions.md) | :heavy_minus_sign:                                         | Specify an API version.                                    |
| `accountID`                                                | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `disputeID`                                                | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `evidenceID`                                               | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |