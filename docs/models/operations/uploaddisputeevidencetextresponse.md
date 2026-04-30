# UploadDisputeEvidenceTextResponse

## Example Usage

```typescript
import { UploadDisputeEvidenceTextResponse } from "@moovio/sdk/models/operations";

let value: UploadDisputeEvidenceTextResponse = {
  headers: {
    "key": [
      "<value 1>",
    ],
  },
  result: {
    evidenceID: "<id>",
    disputeID: "<id>",
    evidenceType: "cover-letter",
    text: "<value>",
    createdOn: new Date("2026-03-12T19:57:39.351Z"),
  },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `headers`                                                                          | Record<string, *string*[]>                                                         | :heavy_check_mark:                                                                 | N/A                                                                                |
| `result`                                                                           | [components.EvidenceTextResponse](../../models/components/evidencetextresponse.md) | :heavy_check_mark:                                                                 | N/A                                                                                |