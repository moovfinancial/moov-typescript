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
    evidenceID: "d66ea185-f09b-44fd-ae09-4da818af9ffa",
    disputeID: "7e011c5a-968a-4f99-81f8-c0644c970ff3",
    mimeType: "<value>",
    filename: "example.file",
    size: 530199,
    evidenceType: "other",
    text: "<value>",
    createdOn: new Date("2025-09-24T19:03:08.378Z"),
    updatedOn: new Date("2024-10-02T18:58:19.098Z"),
  },
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `headers`                                                                                | Record<string, *string*[]>                                                               | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `result`                                                                                 | [components.DisputeEvidenceMetadata](../../models/components/disputeevidencemetadata.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |