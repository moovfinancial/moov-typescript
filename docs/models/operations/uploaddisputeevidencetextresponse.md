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
    evidenceID: "916b3fa4-c1f0-4e4c-904b-81669ad762cb",
    disputeID: "8a20597b-d72d-49bb-9f4b-5635f43947d3",
    evidenceType: "customer-communication",
    text: "<value>",
    createdOn: new Date("2024-08-21T00:13:23.635Z"),
  },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `headers`                                                                          | Record<string, *string*[]>                                                         | :heavy_check_mark:                                                                 | N/A                                                                                |
| `result`                                                                           | [components.EvidenceTextResponse](../../models/components/evidencetextresponse.md) | :heavy_check_mark:                                                                 | N/A                                                                                |