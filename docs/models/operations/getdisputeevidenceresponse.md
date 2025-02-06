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
    evidenceID: "7e011c5a-968a-4f99-81f8-c0644c970ff3",
    disputeID: "8fe945e7-2341-47ea-b104-5cf6afba15e3",
    mimeType: "<value>",
    filename: "example.file",
    size: 696324,
    evidenceType: "cancelation-policy",
    text: "<value>",
    createdOn: new Date("2024-08-02T23:23:59.966Z"),
    updatedOn: new Date("2024-08-17T21:58:52.875Z"),
  },
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `headers`                                                                                | Record<string, *string*[]>                                                               | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `result`                                                                                 | [components.DisputeEvidenceMetadata](../../models/components/disputeevidencemetadata.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |