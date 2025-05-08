# BankAccountIntegration

## Example Usage

```typescript
import { BankAccountIntegration } from "@moovio/sdk/models/components";

let value: BankAccountIntegration = {
  holderName: "<value>",
  holderType: "business",
  accountNumber: "<value>",
  bankAccountType: "loan",
  routingNumber: "<value>",
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `holderName`                                                                         | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `holderType`                                                                         | [components.BankAccountHolderType](../../models/components/bankaccountholdertype.md) | :heavy_check_mark:                                                                   | The type of holder on a funding source.                                              |
| `accountNumber`                                                                      | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `bankAccountType`                                                                    | [components.BankAccountType](../../models/components/bankaccounttype.md)             | :heavy_check_mark:                                                                   | The bank account type.                                                               |
| `routingNumber`                                                                      | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |