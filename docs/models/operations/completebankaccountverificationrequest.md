# CompleteBankAccountVerificationRequest

## Example Usage

```typescript
import { CompleteBankAccountVerificationRequest } from "moov-sdk/models/operations";

let value: CompleteBankAccountVerificationRequest = {
  accountID: "48332bc5-6c05-448e-b0d8-9f24379b06e7",
  bankAccountID: "14b97ace-7a6e-476f-a05d-7596545ef1ba",
  completeBankAccountVerification: {
    code: "MV1234",
  },
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `xMoovVersion`                                                                                           | [components.Versions](../../models/components/versions.md)                                               | :heavy_minus_sign:                                                                                       | Specify an API version.                                                                                  |
| `accountID`                                                                                              | *string*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `bankAccountID`                                                                                          | *string*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `completeBankAccountVerification`                                                                        | [components.CompleteBankAccountVerification](../../models/components/completebankaccountverification.md) | :heavy_check_mark:                                                                                       | N/A                                                                                                      |