# CompleteBankAccountVerificationResponse

## Example Usage

```typescript
import { CompleteBankAccountVerificationResponse } from "@moovio/sdk/models/operations";

let value: CompleteBankAccountVerificationResponse = {
  headers: {
    "key": [],
    "key1": [
      "<value 1>",
      "<value 2>",
    ],
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