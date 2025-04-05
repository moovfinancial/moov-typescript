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
    evidenceID: "d671db64-efbe-4612-b4c6-72a4d5e2cf17",
    disputeID: "8f9f1120-84a7-4bad-baae-d63eb5211e20",
    evidenceType: "other",
    text: "<value>",
    createdOn: new Date("2024-09-16T03:03:32.769Z"),
  },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `headers`                                                                          | Record<string, *string*[]>                                                         | :heavy_check_mark:                                                                 | N/A                                                                                |
| `result`                                                                           | [components.EvidenceTextResponse](../../models/components/evidencetextresponse.md) | :heavy_check_mark:                                                                 | N/A                                                                                |