# Verification

Describes identity verification status and relevant identity verification documents.

## Example Usage

```typescript
import { Verification } from "@moovio/sdk/models/components";

let value: Verification = {
  status: "errored",
  documents: [
    {
      documentID: "e07e83e8-9429-4e99-ac99-c941f719eb39",
      type: "bankStatement",
      contentType: "application/pdf",
      uploadedAt: new Date("2024-05-06T12:20:38.184Z"),
    },
  ],
};
```

## Fields

| Field                                                                                                                                                                       | Type                                                                                                                                                                        | Required                                                                                                                                                                    | Description                                                                                                                                                                 |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ~~`verificationStatus`~~                                                                                                                                                    | [components.AccountVerificationStatus](../../models/components/accountverificationstatus.md)                                                                                | :heavy_minus_sign:                                                                                                                                                          | : warning: ** DEPRECATED **: This will be removed in a future release, please migrate away from it as soon as possible.<br/><br/>Possible states an account verification can be in. |
| ~~`status`~~                                                                                                                                                                | [components.VerificationStatus](../../models/components/verificationstatus.md)                                                                                              | :heavy_check_mark:                                                                                                                                                          | : warning: ** DEPRECATED **: This will be removed in a future release, please migrate away from it as soon as possible.<br/><br/>Possible states an account verification can be in. |
| ~~`details`~~                                                                                                                                                               | [components.VerificationStatusDetail](../../models/components/verificationstatusdetail.md)                                                                                  | :heavy_minus_sign:                                                                                                                                                          | : warning: ** DEPRECATED **: This will be removed in a future release, please migrate away from it as soon as possible.<br/><br/>Additional detail for a verification status. |
| `documents`                                                                                                                                                                 | [components.Document](../../models/components/document.md)[]                                                                                                                | :heavy_minus_sign:                                                                                                                                                          | N/A                                                                                                                                                                         |