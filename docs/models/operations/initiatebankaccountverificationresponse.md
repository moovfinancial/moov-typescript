# InitiateBankAccountVerificationResponse

## Example Usage

```typescript
import { InitiateBankAccountVerificationResponse } from "@moovio/sdk/models/operations";

let value: InitiateBankAccountVerificationResponse = {
  headers: {
    "key": [],
    "key1": [],
  },
  result: {
    verificationMethod: "instant",
    status: "successful",
  },
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `headers`                                                                                              | Record<string, *string*[]>                                                                             | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `result`                                                                                               | [components.BankAccountVerificationCreated](../../models/components/bankaccountverificationcreated.md) | :heavy_check_mark:                                                                                     | N/A                                                                                                    |