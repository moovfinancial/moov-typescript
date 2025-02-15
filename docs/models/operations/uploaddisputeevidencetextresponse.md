# UploadDisputeEvidenceTextResponse

## Example Usage

```typescript
import { UploadDisputeEvidenceTextResponse } from "@moovio/sdk/models/operations";

let value: UploadDisputeEvidenceTextResponse = {
  headers: {
    "key": [
      "<value>",
    ],
  },
  result: {
    evidenceID: "6916b3fa-4c1f-40e4-ac04-b81669ad762c",
    disputeID: "68a20597-bd72-4d9b-8bf4-b5635f43947d",
    evidenceType: "terms-of-service",
    text: "<value>",
    createdOn: new Date("2024-10-31T02:19:19.164Z"),
  },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `headers`                                                                          | Record<string, *string*[]>                                                         | :heavy_check_mark:                                                                 | N/A                                                                                |
| `result`                                                                           | [components.EvidenceTextResponse](../../models/components/evidencetextresponse.md) | :heavy_check_mark:                                                                 | N/A                                                                                |