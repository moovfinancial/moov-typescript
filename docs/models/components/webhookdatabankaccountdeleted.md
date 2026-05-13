# WebhookDataBankAccountDeleted

## Example Usage

```typescript
import { WebhookDataBankAccountDeleted } from "@moovio/sdk/models/components";

let value: WebhookDataBankAccountDeleted = {
  bankAccountID: "<id>",
  accountID: "<id>",
  status: "errored",
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `bankAccountID`                                                              | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `accountID`                                                                  | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `status`                                                                     | [components.BankAccountStatus](../../models/components/bankaccountstatus.md) | :heavy_check_mark:                                                           | N/A                                                                          |