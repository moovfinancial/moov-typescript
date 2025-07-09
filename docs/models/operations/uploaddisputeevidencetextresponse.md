# UploadDisputeEvidenceTextResponse

## Example Usage

```typescript
import { UploadDisputeEvidenceTextResponse } from "@moovio/sdk/models/operations";

let value: UploadDisputeEvidenceTextResponse = {
  headers: {},
  result: {
    evidenceID: "db64efbe-6124-4c67-b2a4-d5e2cf17d8f9",
    disputeID: "112084a7-bada-4aed-a63e-b5211e20ee97",
    evidenceType: "cancelation-policy",
    text: "<value>",
    createdOn: new Date("2024-06-15T14:32:53.967Z"),
  },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `headers`                                                                          | Record<string, *string*[]>                                                         | :heavy_check_mark:                                                                 | N/A                                                                                |
| `result`                                                                           | [components.EvidenceTextResponse](../../models/components/evidencetextresponse.md) | :heavy_check_mark:                                                                 | N/A                                                                                |