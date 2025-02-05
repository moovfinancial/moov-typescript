# GetBankAccountVerificationResponse

## Example Usage

```typescript
import { GetBankAccountVerificationResponse } from "@moovio/sdk/models/operations";

let value: GetBankAccountVerificationResponse = {
  headers: {
    "key": [
      "<value>",
    ],
  },
  result: {
    verificationMethod: "ach",
    status: "new",
  },
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `headers`                                                                                | Record<string, *string*[]>                                                               | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `result`                                                                                 | [components.BankAccountVerification](../../models/components/bankaccountverification.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |