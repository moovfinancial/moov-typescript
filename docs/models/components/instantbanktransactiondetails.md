# InstantBankTransactionDetails

Instant-bank specific details about the transaction.

## Example Usage

```typescript
import { InstantBankTransactionDetails } from "@moovio/sdk/models/components";

let value: InstantBankTransactionDetails = {
  network: "rtp",
  status: "initiated",
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `network`                                                                                          | [components.InstantBankNetwork](../../models/components/instantbanknetwork.md)                     | :heavy_check_mark:                                                                                 | The network that the transaction was processed on.                                                 |
| `status`                                                                                           | [components.InstantBankTransactionStatus](../../models/components/instantbanktransactionstatus.md) | :heavy_check_mark:                                                                                 | Status of a transaction within the instant-bank lifecycle.                                         |
| `networkResponseCode`                                                                              | *string*                                                                                           | :heavy_minus_sign:                                                                                 | Response code returned by network on failure.                                                      |
| `failureCode`                                                                                      | [components.InstantBankFailureCode](../../models/components/instantbankfailurecode.md)             | :heavy_minus_sign:                                                                                 | Status codes for instant-bank failures.                                                            |
| `endToEndID`                                                                                       | *string*                                                                                           | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `initiatedOn`                                                                                      | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)      | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `completedOn`                                                                                      | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)      | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `failedOn`                                                                                         | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)      | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `acceptedWithoutPostingOn`                                                                         | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)      | :heavy_minus_sign:                                                                                 | N/A                                                                                                |