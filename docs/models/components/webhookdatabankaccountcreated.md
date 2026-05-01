# WebhookDataBankAccountCreated

## Example Usage

```typescript
import { WebhookDataBankAccountCreated } from "@moovio/sdk/models/components";

let value: WebhookDataBankAccountCreated = {
  bankAccountID: "<id>",
  accountID: "<id>",
  status: "verificationFailed",
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `bankAccountID`                                                              | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `accountID`                                                                  | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `status`                                                                     | [components.BankAccountStatus](../../models/components/bankaccountstatus.md) | :heavy_check_mark:                                                           | N/A                                                                          |