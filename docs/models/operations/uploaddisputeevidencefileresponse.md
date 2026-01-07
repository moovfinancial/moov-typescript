# UploadDisputeEvidenceFileResponse

## Example Usage

```typescript
import { UploadDisputeEvidenceFileResponse } from "@moovio/sdk/models/operations";

let value: UploadDisputeEvidenceFileResponse = {
  headers: {
    "key": [],
    "key1": [
      "<value 1>",
      "<value 2>",
    ],
    "key2": [
      "<value 1>",
    ],
  },
  result: {
    evidenceID: "f7dfb15b-5ab2-4626-b26c-b7f4d5f78f5c",
    disputeID: "abdf9e6b-7cd6-4b57-96f0-635b4ea88162",
    filename: "example.file",
    mimeType: "<value>",
    size: 766745,
    evidenceType: "cover-letter",
    createdOn: new Date("2026-04-23T22:37:19.007Z"),
  },
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `headers`                                                                              | Record<string, *string*[]>                                                             | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `result`                                                                               | [components.EvidenceUploadResponse](../../models/components/evidenceuploadresponse.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |