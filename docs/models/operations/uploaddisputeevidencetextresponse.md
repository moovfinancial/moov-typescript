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
    evidenceID: "bb2fb4bb-5659-4e2e-80a6-cb7a8c784949",
    disputeID: "26642004-7b7e-4025-b9d5-40d69f02ccc8",
    evidenceType: "terms-of-service",
    text: "<value>",
    createdOn: new Date("2024-10-21T17:31:37.327Z"),
  },
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `headers`                                                          | Record<string, *string*[]>                                         | :heavy_check_mark:                                                 | N/A                                                                |
| `result`                                                           | [components.EvidenceText](../../models/components/evidencetext.md) | :heavy_check_mark:                                                 | N/A                                                                |