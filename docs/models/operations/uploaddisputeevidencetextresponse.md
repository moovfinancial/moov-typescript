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
    evidenceID: "16b3fa4c-1f0e-44c0-a4b8-1669ad762cb6",
    disputeID: "a20597bd-72d9-4bbf-a4b5-635f43947d36",
    evidenceType: "customer-communication",
    text: "<value>",
    createdOn: new Date("2025-12-04T07:07:12.134Z"),
  },
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `headers`                                                          | Record<string, *string*[]>                                         | :heavy_check_mark:                                                 | N/A                                                                |
| `result`                                                           | [components.EvidenceText](../../models/components/evidencetext.md) | :heavy_check_mark:                                                 | N/A                                                                |