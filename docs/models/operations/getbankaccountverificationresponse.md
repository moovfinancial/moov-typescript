# GetBankAccountVerificationResponse

## Example Usage

```typescript
import { GetBankAccountVerificationResponse } from "@moovio/sdk/models/operations";

let value: GetBankAccountVerificationResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    "key1": [],
  },
  result: {
    verificationMethod: "instant",
    status: "sent-credit",
  },
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `headers`                                                                                | Record<string, *string*[]>                                                               | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `result`                                                                                 | [components.BankAccountVerification](../../models/components/bankaccountverification.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |