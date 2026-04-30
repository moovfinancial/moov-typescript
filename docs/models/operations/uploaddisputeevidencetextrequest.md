# UploadDisputeEvidenceTextRequest

## Example Usage

```typescript
import { UploadDisputeEvidenceTextRequest } from "@moovio/sdk/models/operations";

let value: UploadDisputeEvidenceTextRequest = {
  accountID: "<id>",
  disputeID: "<id>",
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