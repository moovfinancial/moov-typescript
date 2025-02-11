# UpdateDisputeEvidenceResponse

## Example Usage

```typescript
import { UpdateDisputeEvidenceResponse } from "@moovio/sdk/models/operations";

let value: UpdateDisputeEvidenceResponse = {
  headers: {
    "key": [
      "<value>",
    ],
  },
  result: {
    evidenceID: "54f5e2c0-70cf-40ec-85e4-61a07ad2cb89",
    disputeID: "96d596e4-1b69-40fe-8906-fa27f8094168",
    mimeType: "<value>",
    filename: "example.file",
    size: 559047,
    evidenceType: "customer-communication",
    text: "<value>",
    createdOn: new Date("2025-05-20T02:57:57.993Z"),
    updatedOn: new Date("2024-04-09T05:03:15.773Z"),
  },
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `headers`                                                                                | Record<string, *string*[]>                                                               | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `result`                                                                                 | [components.DisputeEvidenceMetadata](../../models/components/disputeevidencemetadata.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |