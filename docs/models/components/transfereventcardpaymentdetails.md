# TransferEventCardPaymentDetails

## Example Usage

```typescript
import { TransferEventCardPaymentDetails } from "@moovio/sdk/models/components";

let value: TransferEventCardPaymentDetails = {
  status: "completed",
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `status`                                                                                           | [components.CardPaymentTransactionStatus](../../models/components/cardpaymenttransactionstatus.md) | :heavy_check_mark:                                                                                 | Status of a card payment transaction.                                                              |
| `failureCode`                                                                                      | [components.CardTransactionFailureCode](../../models/components/cardtransactionfailurecode.md)     | :heavy_minus_sign:                                                                                 | N/A                                                                                                |