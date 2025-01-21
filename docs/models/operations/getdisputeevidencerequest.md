# GetDisputeEvidenceRequest

## Example Usage

```typescript
import { GetDisputeEvidenceRequest } from "moov-sdk/models/operations";

let value: GetDisputeEvidenceRequest = {
  accountID: "e1725a24-ad98-412f-a07c-3774eeb0a342",
  disputeID: "73e3c02d-8a66-422e-a77a-08e667d9bb0f",
  evidenceID: "90e7e69e-7266-4bd0-b742-ad83c8cf654b",
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `xMoovVersion`                                             | [components.Versions](../../models/components/versions.md) | :heavy_minus_sign:                                         | Specify an API version.                                    |
| `accountID`                                                | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `disputeID`                                                | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `evidenceID`                                               | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |