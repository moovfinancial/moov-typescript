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
      evidenceID: "79371547-e269-4f2e-8177-357df8d95368",
      disputeID: "293d511e-12d4-4ad9-afb1-8bc0bdb878be",
      evidenceType: "other",
      createdOn: new Date("2025-02-07T13:51:36.415Z"),
      updatedOn: new Date("2023-03-16T21:31:12.259Z"),
    },
  ],
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `headers`                                                                                  | Record<string, *string*[]>                                                                 | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `result`                                                                                   | [components.DisputeEvidenceResponse](../../models/components/disputeevidenceresponse.md)[] | :heavy_check_mark:                                                                         | N/A                                                                                        |