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
    evidenceID: "5ef734c4-679f-4354-9515-e45fb8c17132",
    disputeID: "6f47cdc4-7236-4b8e-8d09-9f08309cc060",
    mimeType: "<value>",
    filename: "example.file",
    size: 192880,
    evidenceType: "proof-of-delivery",
    text: "<value>",
    createdOn: new Date("2024-01-07T16:10:14.746Z"),
    updatedOn: new Date("2023-11-01T01:12:15.021Z"),
  },
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `headers`                                                                                | Record<string, *string*[]>                                                               | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `result`                                                                                 | [components.DisputeEvidenceMetadata](../../models/components/disputeevidencemetadata.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |