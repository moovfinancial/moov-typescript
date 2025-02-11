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
    evidenceID: "4559a420-920e-481d-af70-16e2d07a09f2",
    disputeID: "92008fab-792e-4cf4-832f-c28622f4f172",
    filename: "example.file",
    mimeType: "<value>",
    size: 553766,
    evidenceType: "receipt",
    createdOn: new Date("2025-03-02T08:07:59.742Z"),
  },
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `headers`                                                                              | Record<string, *string*[]>                                                             | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `result`                                                                               | [components.EvidenceUploadResponse](../../models/components/evidenceuploadresponse.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |