# CompleteBankAccountVerificationRequest

## Example Usage

```typescript
import { CompleteBankAccountVerificationRequest } from "@moovio/sdk/models/operations";

let value: CompleteBankAccountVerificationRequest = {
  accountID: "<id>",
  bankAccountID: "<id>",
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