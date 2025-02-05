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
    evidenceID: "008fab79-2ecf-4432-8fc2-8622f4f17208",
    disputeID: "bb2fb4bb-5659-4e2e-80a6-cb7a8c784949",
    evidenceType: "proof-of-delivery",
    text: "<value>",
    createdOn: new Date("2024-04-02T01:33:01.124Z"),
  },
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `headers`                                                          | Record<string, *string*[]>                                         | :heavy_check_mark:                                                 | N/A                                                                |
| `result`                                                           | [components.EvidenceText](../../models/components/evidencetext.md) | :heavy_check_mark:                                                 | N/A                                                                |