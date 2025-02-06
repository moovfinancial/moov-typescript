# UploadDisputeEvidenceTextRequest

## Example Usage

```typescript
import { UploadDisputeEvidenceTextRequest } from "@moovio/sdk/models/operations";

let value: UploadDisputeEvidenceTextRequest = {
  accountID: "559a4209-20e8-41df-a701-6e2d07a09f2b",
  disputeID: "2008fab7-92ec-4f43-a2fc-28622f4f1720",
  createEvidenceText: {
    text: "<value>",
    evidenceType: "receipt",
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `accountID`                                                                    | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `disputeID`                                                                    | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `createEvidenceText`                                                           | [components.CreateEvidenceText](../../models/components/createevidencetext.md) | :heavy_check_mark:                                                             | N/A                                                                            |