# ListDisputeEvidenceResponse

## Example Usage

```typescript
import { ListDisputeEvidenceResponse } from "@moovio/sdk/models/operations";

let value: ListDisputeEvidenceResponse = {
  headers: {
    "key": [
      "<value>",
    ],
  },
  result: [
    {
      evidenceID: "9371547e-269f-42e1-8773-57df8d953680",
      disputeID: "93d511e1-2d4a-4d9f-bb18-bc0bdb878be9",
      evidenceType: "generic-evidence",
      createdOn: new Date("2023-03-16T21:31:12.259Z"),
      updatedOn: new Date("2024-07-02T21:47:04.955Z"),
    },
  ],
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `headers`                                                                                  | Record<string, *string*[]>                                                                 | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `result`                                                                                   | [components.DisputeEvidenceResponse](../../models/components/disputeevidenceresponse.md)[] | :heavy_check_mark:                                                                         | N/A                                                                                        |