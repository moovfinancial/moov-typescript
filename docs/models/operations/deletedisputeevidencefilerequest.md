# DeleteDisputeEvidenceFileRequest

## Example Usage

```typescript
import { DeleteDisputeEvidenceFileRequest } from "moov-sdk/models/operations";

let value: DeleteDisputeEvidenceFileRequest = {
  accountID: "46e95cea-3d6b-47f1-8233-32b3336f5415",
  disputeID: "c1244dc9-459b-468e-8a81-239105bbcb97",
  evidenceID: "9a191821-1e94-4182-8c7b-6ba8d994e868",
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `xMoovVersion`                                             | [components.Versions](../../models/components/versions.md) | :heavy_minus_sign:                                         | Specify an API version.                                    |
| `accountID`                                                | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `disputeID`                                                | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `evidenceID`                                               | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |