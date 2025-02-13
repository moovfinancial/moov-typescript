# UpdateDisputeEvidenceRequest

## Example Usage

```typescript
import { UpdateDisputeEvidenceRequest } from "@moovio/sdk/models/operations";

let value: UpdateDisputeEvidenceRequest = {
  accountID: "8648e483-53f9-4b15-be12-a9de24601374",
  disputeID: "5ef734c4-679f-4354-9515-e45fb8c17132",
  evidenceID: "6f47cdc4-7236-4b8e-8d09-9f08309cc060",
  updateEvidence: {},
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `accountID`                                                            | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `disputeID`                                                            | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `evidenceID`                                                           | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `updateEvidence`                                                       | [components.UpdateEvidence](../../models/components/updateevidence.md) | :heavy_check_mark:                                                     | N/A                                                                    |