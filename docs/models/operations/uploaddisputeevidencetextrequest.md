# UploadDisputeEvidenceTextRequest

## Example Usage

```typescript
import { UploadDisputeEvidenceTextRequest } from "moov-sdk/models/operations";

let value: UploadDisputeEvidenceTextRequest = {
  accountID: "82c7b6ba-8d99-44e8-8682-448b428d674c",
  disputeID: "2fa8cf3c-5bbf-410b-a9bc-75c69e204c9f",
  createEvidenceText: {
    text: "<value>",
    evidenceType: "cancelation-policy",
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `xMoovVersion`                                                                 | [components.Versions](../../models/components/versions.md)                     | :heavy_minus_sign:                                                             | Specify an API version.                                                        |
| `accountID`                                                                    | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `disputeID`                                                                    | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `createEvidenceText`                                                           | [components.CreateEvidenceText](../../models/components/createevidencetext.md) | :heavy_check_mark:                                                             | N/A                                                                            |