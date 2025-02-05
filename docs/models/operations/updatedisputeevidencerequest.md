# UpdateDisputeEvidenceRequest

## Example Usage

```typescript
import { UpdateDisputeEvidenceRequest } from "@moovio/sdk/models/operations";

let value: UpdateDisputeEvidenceRequest = {
  accountID: "45e72341-7ea1-4045-acf6-afba15e3db58",
  disputeID: "b82c6f44-59e2-4497-97de-7ac84a9e0e80",
  evidenceID: "b7f65d8a-ca61-49e6-be89-d91f3b873b1f",
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