# UpdateDisputeEvidenceRequest

## Example Usage

```typescript
import { UpdateDisputeEvidenceRequest } from "moov-sdk/models/operations";

let value: UpdateDisputeEvidenceRequest = {
  accountID: "479f3f8b-c2ff-4dd5-bde4-2c9165a6acb9",
  disputeID: "38c33ace-7b25-4a2f-b2c5-b6be92f836be",
  evidenceID: "2d967cda-0c06-4784-b6c4-d02e7097159a",
  updateEvidence: {},
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `xMoovVersion`                                                         | [components.Versions](../../models/components/versions.md)             | :heavy_minus_sign:                                                     | Specify an API version.                                                |
| `accountID`                                                            | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `disputeID`                                                            | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `evidenceID`                                                           | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `updateEvidence`                                                       | [components.UpdateEvidence](../../models/components/updateevidence.md) | :heavy_check_mark:                                                     | N/A                                                                    |