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
    evidenceID: "88b82c6f-4459-4e24-a977-de7ac84a9e0e",
    disputeID: "05b7f65d-8aca-4619-8e6e-89d91f3b873b",
    mimeType: "<value>",
    filename: "example.file",
    size: 990454,
    evidenceType: "cover-letter",
    text: "<value>",
    createdOn: new Date("2024-08-08T19:43:23.369Z"),
    updatedOn: new Date("2024-04-10T07:26:27.442Z"),
  },
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `headers`                                                                                | Record<string, *string*[]>                                                               | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `result`                                                                                 | [components.DisputeEvidenceMetadata](../../models/components/disputeevidencemetadata.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |