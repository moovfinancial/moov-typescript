# CompleteBankAccountVerificationRequest

## Example Usage

```typescript
import { CompleteBankAccountVerificationRequest } from "@moovio/sdk/models/operations";

let value: CompleteBankAccountVerificationRequest = {
  accountID: "33b63d61-b499-4f34-aeb7-b66284a6dc29",
  bankAccountID: "81865953-b3cf-47c2-acf8-42e5766ceaf3",
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