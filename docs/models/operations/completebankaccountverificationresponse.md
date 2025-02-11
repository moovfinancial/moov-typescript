# CompleteBankAccountVerificationResponse

## Example Usage

```typescript
import { CompleteBankAccountVerificationResponse } from "@moovio/sdk/models/operations";

let value: CompleteBankAccountVerificationResponse = {
  headers: {
    "key": [
      "<value>",
    ],
  },
  result: {
    verificationMethod: "instant",
    status: "successful",
  },
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `headers`                                                                                | Record<string, *string*[]>                                                               | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `result`                                                                                 | [components.BankAccountVerification](../../models/components/bankaccountverification.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |