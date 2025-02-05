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
    evidenceID: "8648e483-53f9-4b15-be12-a9de24601374",
    disputeID: "5ef734c4-679f-4354-9515-e45fb8c17132",
    mimeType: "<value>",
    filename: "example.file",
    size: 381639,
    evidenceType: "other",
    text: "<value>",
    createdOn: new Date("2023-10-17T11:33:47.639Z"),
    updatedOn: new Date("2024-06-01T18:46:06.050Z"),
  },
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `headers`                                                                                | Record<string, *string*[]>                                                               | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `result`                                                                                 | [components.DisputeEvidenceMetadata](../../models/components/disputeevidencemetadata.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |