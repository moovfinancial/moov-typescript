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
    evidenceID: "ef4947ee-5491-4ba1-8e09-5f65a3acbdff",
    disputeID: "07719000-83e6-44d6-aaf0-c889c3c10eb9",
    evidenceType: "cover-letter",
    createdOn: new Date("2025-08-22T02:10:29.601Z"),
    updatedOn: new Date("2024-08-02T12:45:23.614Z"),
  },
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `headers`                                                                                | Record<string, *string*[]>                                                               | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `result`                                                                                 | [components.DisputeEvidenceResponse](../../models/components/disputeevidenceresponse.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |