# ListDisputeEvidenceResponse

## Example Usage

```typescript
import { ListDisputeEvidenceResponse } from "@moovio/sdk/models/operations";

let value: ListDisputeEvidenceResponse = {
  headers: {
    "key": [
      "<value>",
    ],
  },
  result: [
    {
      evidenceID: "5ea58d9c-1867-4d68-a7c5-f5d5805cbe2f",
      disputeID: "b634b59d-eca9-4348-a623-b13c7203a38f",
      evidenceType: "proof-of-delivery",
      createdOn: new Date("2025-01-17T16:42:59.651Z"),
      updatedOn: new Date("2023-05-01T20:07:17.172Z"),
    },
  ],
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `headers`                                                                                  | Record<string, *string*[]>                                                                 | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `result`                                                                                   | [components.DisputeEvidenceResponse](../../models/components/disputeevidenceresponse.md)[] | :heavy_check_mark:                                                                         | N/A                                                                                        |