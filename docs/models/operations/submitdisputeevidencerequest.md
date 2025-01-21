# SubmitDisputeEvidenceRequest

## Example Usage

```typescript
import { SubmitDisputeEvidenceRequest } from "moov-sdk/models/operations";

let value: SubmitDisputeEvidenceRequest = {
  accountID: "cada7404-063b-431d-80ce-187c9407ee2d",
  disputeID: "1f617008-3952-4f30-8444-5c051f277c4b",
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `xMoovVersion`                                             | [components.Versions](../../models/components/versions.md) | :heavy_minus_sign:                                         | Specify an API version.                                    |
| `accountID`                                                | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `disputeID`                                                | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |