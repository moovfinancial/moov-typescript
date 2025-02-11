# CompleteBankAccountVerificationRequest

## Example Usage

```typescript
import { CompleteBankAccountVerificationRequest } from "@moovio/sdk/models/operations";

let value: CompleteBankAccountVerificationRequest = {
  accountID: "34cb8b60-0810-4fd2-a0f4-2b14fa86c2fd",
  bankAccountID: "0be851ce-1c0f-4984-ae4d-fc8177365274",
  completeBankAccountVerification: {
    code: "MV1234",
  },
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `accountID`                                                                                              | *string*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `bankAccountID`                                                                                          | *string*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `completeBankAccountVerification`                                                                        | [components.CompleteBankAccountVerification](../../models/components/completebankaccountverification.md) | :heavy_check_mark:                                                                                       | N/A                                                                                                      |