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
      evidenceID: "09fd52cb-fd81-4758-a4dd-596e2bf23bc7",
      disputeID: "371547e2-69f2-4e17-a735-7df8d9536802",
      mimeType: "<value>",
      filename: "example.file",
      size: 225001,
      evidenceType: "cover-letter",
      text: "<value>",
      createdOn: new Date("2023-12-25T07:53:20.177Z"),
      updatedOn: new Date("2023-04-25T21:33:32.355Z"),
    },
  ],
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `headers`                                                                                  | Record<string, *string*[]>                                                                 | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `result`                                                                                   | [components.DisputeEvidenceMetadata](../../models/components/disputeevidencemetadata.md)[] | :heavy_check_mark:                                                                         | N/A                                                                                        |