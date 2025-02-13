# BankAccountVerificationCreated

## Example Usage

```typescript
import { BankAccountVerificationCreated } from "@moovio/sdk/models/components";

let value: BankAccountVerificationCreated = {
  verificationMethod: "ach",
  status: "max-attempts-exceeded",
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `verificationMethod`                                                                                 | [components.BankAccountVerificationMethod](../../models/components/bankaccountverificationmethod.md) | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `status`                                                                                             | [components.BankAccountVerificationStatus](../../models/components/bankaccountverificationstatus.md) | :heavy_check_mark:                                                                                   | N/A                                                                                                  |