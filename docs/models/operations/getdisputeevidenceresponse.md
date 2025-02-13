# GetDisputeEvidenceResponse

## Example Usage

```typescript
import { GetDisputeEvidenceResponse } from "@moovio/sdk/models/operations";

let value: GetDisputeEvidenceResponse = {
  headers: {
    "key": [
      "<value>",
    ],
  },
  result: {
    evidenceID: "588b82c6-f445-49e2-b497-7de7ac84a9e0",
    disputeID: "805b7f65-d8ac-4a61-a9e6-e89d91f3b873",
    evidenceType: "receipt",
    createdOn: new Date("2025-12-21T12:53:01.858Z"),
    updatedOn: new Date("2025-07-15T12:42:19.873Z"),
  },
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `headers`                                                                                | Record<string, *string*[]>                                                               | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `result`                                                                                 | [components.DisputeEvidenceResponse](../../models/components/disputeevidenceresponse.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |