# SubmitDisputeEvidenceRequest

## Example Usage

```typescript
import { SubmitDisputeEvidenceRequest } from "moov-sdk/models/operations";

let value: SubmitDisputeEvidenceRequest = {
  accountID: "6a705a67-d49d-4c30-9420-48a639cbd487",
  disputeID: "a2c0696a-0d14-4401-bdcb-b140003003c0",
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `xMoovVersion`                                             | [components.Versions](../../models/components/versions.md) | :heavy_minus_sign:                                         | Specify an API version.                                    |
| `accountID`                                                | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `disputeID`                                                | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |