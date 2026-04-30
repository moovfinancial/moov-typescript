# ListDisputeEvidenceResponse

## Example Usage

```typescript
import { ListDisputeEvidenceResponse } from "@moovio/sdk/models/operations";

let value: ListDisputeEvidenceResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    "key1": [],
  },
  result: [
    {
      evidenceID: "<id>",
      disputeID: "<id>",
      evidenceType: "cancelation-policy",
      createdOn: new Date("2025-07-15T05:55:10.643Z"),
      updatedOn: new Date("2026-07-27T13:22:49.568Z"),
    },
  ],
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `headers`                                                                                  | Record<string, *string*[]>                                                                 | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `result`                                                                                   | [components.DisputeEvidenceResponse](../../models/components/disputeevidenceresponse.md)[] | :heavy_check_mark:                                                                         | N/A                                                                                        |