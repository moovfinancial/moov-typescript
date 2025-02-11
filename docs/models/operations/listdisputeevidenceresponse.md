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
      evidenceID: "9371547e-269f-42e1-8773-57df8d953680",
      disputeID: "93d511e1-2d4a-4d9f-bb18-bc0bdb878be9",
      mimeType: "<value>",
      filename: "example.file",
      size: 701257,
      evidenceType: "receipt",
      text: "<value>",
      createdOn: new Date("2024-07-02T21:47:04.955Z"),
      updatedOn: new Date("2023-11-10T23:44:12.862Z"),
    },
  ],
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `headers`                                                                                  | Record<string, *string*[]>                                                                 | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `result`                                                                                   | [components.DisputeEvidenceMetadata](../../models/components/disputeevidencemetadata.md)[] | :heavy_check_mark:                                                                         | N/A                                                                                        |