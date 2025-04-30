# WebhookDataBankAccountUpdated

## Example Usage

```typescript
import { WebhookDataBankAccountUpdated } from "@moovio/sdk/models/components";

let value: WebhookDataBankAccountUpdated = {
  bankAccountID: "5e26a831-217a-43db-86c3-b1e00d4ceb53",
  accountID: "8c0d1949-13ae-47b7-8a75-5e83286e7374",
  status: "pending",
  statusReason: "verification-successful",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `bankAccountID`                                                                               | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `accountID`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `status`                                                                                      | [components.BankAccountStatus](../../models/components/bankaccountstatus.md)                  | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `statusReason`                                                                                | [components.BankAccountStatusReason](../../models/components/bankaccountstatusreason.md)      | :heavy_check_mark:                                                                            | The reason the bank account status changed to the current value.                              |
| `exceptionDetails`                                                                            | [components.BankAccountException](../../models/components/bankaccountexception.md)            | :heavy_minus_sign:                                                                            | Reason for, and details related to, an `errored` or `verificationFailed` bank account status. |