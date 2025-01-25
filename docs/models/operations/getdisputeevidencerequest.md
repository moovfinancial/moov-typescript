# GetDisputeEvidenceRequest

## Example Usage

```typescript
import { GetDisputeEvidenceRequest } from "@moovio/sdk/models/operations";

let value: GetDisputeEvidenceRequest = {
  accountID: "adac44a9-8238-46f8-96f1-45dc4d17a414",
  disputeID: "5610e14a-d5a7-4060-bfc5-3655e6b2879a",
  evidenceID: "3609e6f9-38aa-4a33-83b7-ac97682cecdd",
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `xMoovVersion`                                             | [components.Versions](../../models/components/versions.md) | :heavy_minus_sign:                                         | Specify an API version.                                    |
| `accountID`                                                | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `disputeID`                                                | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `evidenceID`                                               | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |