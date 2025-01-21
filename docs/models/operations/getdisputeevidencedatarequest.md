# GetDisputeEvidenceDataRequest

## Example Usage

```typescript
import { GetDisputeEvidenceDataRequest } from "moov-sdk/models/operations";

let value: GetDisputeEvidenceDataRequest = {
  accountID: "d14d06d7-17b5-4ef2-a147-23eb9b02bbd9",
  disputeID: "6dd760ca-78ee-42d8-b14a-e19a4c130841",
  evidenceID: "3949ab40-dfe1-4c7a-a98a-992dcfc9ea42",
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `xMoovVersion`                                             | [components.Versions](../../models/components/versions.md) | :heavy_minus_sign:                                         | Specify an API version.                                    |
| `accountID`                                                | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `disputeID`                                                | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `evidenceID`                                               | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |