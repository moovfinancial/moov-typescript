# CreateBankAccountAttestationResponse

## Example Usage

```typescript
import { CreateBankAccountAttestationResponse } from "@moovio/sdk/models/operations";

let value: CreateBankAccountAttestationResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
    ],
    "key1": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    "key2": [
      "<value 1>",
      "<value 2>",
    ],
  },
  result: {
    attestationID: "<id>",
    bankAccountID: "<id>",
    accountID: "<id>",
    createdOn: new Date("2026-05-19T14:30:00Z"),
    attestedAt: new Date("2026-05-15"),
    description: "lest er as amid",
  },
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `headers`                                                                              | Record<string, *string*[]>                                                             | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `result`                                                                               | [components.BankAccountAttestation](../../models/components/bankaccountattestation.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |