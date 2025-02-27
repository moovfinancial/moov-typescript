# BankAccountVerification

## Example Usage

```typescript
import { BankAccountVerification } from "@moovio/sdk/models/components";

let value: BankAccountVerification = {
  verificationMethod: "instant",
  status: "expired",
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `verificationMethod`                                                                                 | [components.BankAccountVerificationMethod](../../models/components/bankaccountverificationmethod.md) | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `status`                                                                                             | [components.BankAccountVerificationStatus](../../models/components/bankaccountverificationstatus.md) | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `exceptionDetails`                                                                                   | [components.BankAccountException](../../models/components/bankaccountexception.md)                   | :heavy_minus_sign:                                                                                   | Reason for, and details related to, an `errored` or `verificationFailed` bank account status.        |