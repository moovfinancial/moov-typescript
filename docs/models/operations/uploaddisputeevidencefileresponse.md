# UploadDisputeEvidenceFileResponse

## Example Usage

```typescript
import { UploadDisputeEvidenceFileResponse } from "@moovio/sdk/models/operations";

let value: UploadDisputeEvidenceFileResponse = {
  headers: {
    "key": [
      "<value>",
    ],
  },
  result: {
    evidenceID: "0f7dfb15-b5ab-4262-b626-cb7f4d5f78f5",
    disputeID: "eabdf9e6-b7cd-46b5-876f-0635b4ea8816",
    filename: "example.file",
    mimeType: "<value>",
    size: 257276,
    evidenceType: "cover-letter",
    createdOn: new Date("2025-05-05T23:13:55.453Z"),
  },
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `headers`                                                                              | Record<string, *string*[]>                                                             | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `result`                                                                               | [components.EvidenceUploadResponse](../../models/components/evidenceuploadresponse.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |