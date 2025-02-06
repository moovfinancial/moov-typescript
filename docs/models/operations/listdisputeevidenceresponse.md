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
      evidenceID: "371547e2-69f2-4e17-a735-7df8d9536802",
      disputeID: "3d511e12-d4ad-49fb-a18b-c0bdb878be9e",
      mimeType: "<value>",
      filename: "example.file",
      size: 68336,
      evidenceType: "customer-communication",
      text: "<value>",
      createdOn: new Date("2023-11-10T23:44:12.862Z"),
      updatedOn: new Date("2023-11-09T13:14:28.714Z"),
    },
  ],
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `headers`                                                                                  | Record<string, *string*[]>                                                                 | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `result`                                                                                   | [components.DisputeEvidenceMetadata](../../models/components/disputeevidencemetadata.md)[] | :heavy_check_mark:                                                                         | N/A                                                                                        |