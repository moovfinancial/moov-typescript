# TransferEventInstantBankCreditDetails

## Example Usage

```typescript
import { TransferEventInstantBankCreditDetails } from "@moovio/sdk/models/components";

let value: TransferEventInstantBankCreditDetails = {
  status: "initiated",
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `status`                                                                                           | [components.InstantBankTransactionStatus](../../models/components/instantbanktransactionstatus.md) | :heavy_check_mark:                                                                                 | Status of a transaction within the instant-bank lifecycle.                                         |
| `failureCode`                                                                                      | [components.InstantBankFailureCode](../../models/components/instantbankfailurecode.md)             | :heavy_minus_sign:                                                                                 | Status codes for instant-bank failures.                                                            |