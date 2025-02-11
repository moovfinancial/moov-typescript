# UpdateDisputeEvidenceRequest

## Example Usage

```typescript
import { UpdateDisputeEvidenceRequest } from "@moovio/sdk/models/operations";

let value: UpdateDisputeEvidenceRequest = {
  accountID: "48e48353-f9b1-45e1-b2a9-de24601374e5",
  disputeID: "f734c467-9f35-4451-b5e4-5fb8c1713256",
  evidenceID: "47cdc472-36b8-4ed0-899f-08309cc06033",
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