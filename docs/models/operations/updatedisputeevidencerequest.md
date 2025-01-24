# UpdateDisputeEvidenceRequest

## Example Usage

```typescript
import { UpdateDisputeEvidenceRequest } from "moov-sdk/models/operations";

let value: UpdateDisputeEvidenceRequest = {
  accountID: "fa6e9fc5-bb5e-425a-a7af-1cd4476837de",
  disputeID: "4d632f18-3d3b-42fa-b6f8-62b9333704b9",
  evidenceID: "b0975fa4-81b5-4220-bcb7-46e103801b7f",
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