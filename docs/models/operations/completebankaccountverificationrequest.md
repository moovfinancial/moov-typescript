# CompleteBankAccountVerificationRequest

## Example Usage

```typescript
import { CompleteBankAccountVerificationRequest } from "@moovio/sdk/models/operations";

let value: CompleteBankAccountVerificationRequest = {
  accountID: "3606e06d-6a7f-4648-b032-c177a2429a2c",
  bankAccountID: "f3f8f251-9abe-4785-b69f-69855f5935be",
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