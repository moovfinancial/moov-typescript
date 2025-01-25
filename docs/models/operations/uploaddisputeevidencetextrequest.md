# UploadDisputeEvidenceTextRequest

## Example Usage

```typescript
import { UploadDisputeEvidenceTextRequest } from "@moovio/sdk/models/operations";

let value: UploadDisputeEvidenceTextRequest = {
  accountID: "bf95277c-83d2-4805-8a28-8e7124c49139",
  disputeID: "b74da1a3-e293-4f59-a279-c8bd4508fbf7",
  createEvidenceText: {
    text: "<value>",
    evidenceType: "proof-of-delivery",
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