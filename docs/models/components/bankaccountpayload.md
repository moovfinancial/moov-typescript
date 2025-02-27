# BankAccountPayload

Describes the bank account to link to the Moov account.

## Example Usage

```typescript
import { BankAccountPayload } from "@moovio/sdk/models/components";

let value: BankAccountPayload = {
  account: {
    holderName: "<value>",
    holderType: "individual",
    accountNumber: "<value>",
    bankAccountType: "loan",
    routingNumber: "<value>",
  },
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `account`                                                                              | [components.BankAccountIntegration](../../models/components/bankaccountintegration.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |