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
    evidenceID: "44559a42-0920-4e81-8df7-016e2d07a09f",
    disputeID: "b92008fa-b792-4ecf-8432-fc28622f4f17",
    filename: "example.file",
    mimeType: "<value>",
    size: 4787,
    evidenceType: "customer-communication",
    createdOn: new Date("2023-05-05T19:52:13.918Z"),
  },
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `headers`                                                                              | Record<string, *string*[]>                                                             | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `result`                                                                               | [components.EvidenceUploadResponse](../../models/components/evidenceuploadresponse.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |