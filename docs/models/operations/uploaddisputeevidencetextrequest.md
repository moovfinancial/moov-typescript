# UploadDisputeEvidenceTextRequest

## Example Usage

```typescript
import { UploadDisputeEvidenceTextRequest } from "@moovio/sdk/models/operations";

let value: UploadDisputeEvidenceTextRequest = {
  accountID: "1e12d4ad-9fb1-48bc-90bd-b878be9eb184",
  disputeID: "559a4209-20e8-41df-a701-6e2d07a09f2b",
  createEvidenceText: {
    text: "<value>",
    evidenceType: "proof-of-delivery",
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `accountID`                                                                    | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `disputeID`                                                                    | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `createEvidenceText`                                                           | [components.CreateEvidenceText](../../models/components/createevidencetext.md) | :heavy_check_mark:                                                             | N/A                                                                            |