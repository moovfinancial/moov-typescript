# WebhookDataBankAccountUpdated

## Example Usage

```typescript
import { WebhookDataBankAccountUpdated } from "@moovio/sdk/models/components";

let value: WebhookDataBankAccountUpdated = {
  bankAccountID: "154d7945-277b-486f-be90-2100ae7163b4",
  accountID: "4193e837-47d4-46ca-9db9-df2801a04f4d",
  status: "new",
  statusReason: "verification-initiated",
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