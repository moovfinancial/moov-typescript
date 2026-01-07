# GetDisputeEvidenceResponse

## Example Usage

```typescript
import { GetDisputeEvidenceResponse } from "@moovio/sdk/models/operations";

let value: GetDisputeEvidenceResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
    ],
    "key1": [
      "<value 1>",
      "<value 2>",
    ],
  },
  result: {
    evidenceID: "47ee5491-ba1e-4095-8f65-a3acbdff0077",
    disputeID: "900083e6-4d6a-4f0c-8889-c3c10eb98de8",
    evidenceType: "proof-of-delivery",
    createdOn: new Date("2026-08-13T09:08:21.823Z"),
    updatedOn: new Date("2024-05-20T19:15:59.039Z"),
  },
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `headers`                                                                                | Record<string, *string*[]>                                                               | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `result`                                                                                 | [components.DisputeEvidenceResponse](../../models/components/disputeevidenceresponse.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |