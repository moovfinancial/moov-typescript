# UpdateDisputeEvidenceResponse

## Example Usage

```typescript
import { UpdateDisputeEvidenceResponse } from "@moovio/sdk/models/operations";

let value: UpdateDisputeEvidenceResponse = {
  headers: {
    "key": [
      "<value>",
    ],
  },
  result: {
    evidenceID: "9963b2fa-19cd-41f7-817e-5c1eafd5f792",
    disputeID: "87b54a49-b6c1-48dc-bba4-9be37760ddba",
    evidenceType: "proof-of-delivery",
    createdOn: new Date("2023-01-10T20:10:24.204Z"),
    updatedOn: new Date("2025-07-12T01:06:57.276Z"),
  },
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `headers`                                                                                | Record<string, *string*[]>                                                               | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `result`                                                                                 | [components.DisputeEvidenceResponse](../../models/components/disputeevidenceresponse.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |