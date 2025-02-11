# InitiateBankAccountVerificationResponse

## Example Usage

```typescript
import { InitiateBankAccountVerificationResponse } from "@moovio/sdk/models/operations";

let value: InitiateBankAccountVerificationResponse = {
  headers: {
    "key": [
      "<value>",
    ],
  },
  result: {
    verificationMethod: "instant",
    status: "expired",
  },
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `headers`                                                                                              | Record<string, *string*[]>                                                                             | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `result`                                                                                               | [components.BankAccountVerificationCreated](../../models/components/bankaccountverificationcreated.md) | :heavy_check_mark:                                                                                     | N/A                                                                                                    |