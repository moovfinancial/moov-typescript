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
    evidenceID: "844559a4-2092-40e8-b1df-7016e2d07a09",
    disputeID: "2b92008f-ab79-42ec-9f43-2fc28622f4f1",
    filename: "example.file",
    mimeType: "<value>",
    size: 129619,
    evidenceType: "receipt",
    createdOn: new Date("2024-08-29T22:15:46.090Z"),
  },
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `headers`                                                                              | Record<string, *string*[]>                                                             | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `result`                                                                               | [components.EvidenceUploadResponse](../../models/components/evidenceuploadresponse.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |