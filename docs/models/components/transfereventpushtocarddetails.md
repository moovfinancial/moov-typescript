# TransferEventPushToCardDetails

## Example Usage

```typescript
import { TransferEventPushToCardDetails } from "@moovio/sdk/models/components";

let value: TransferEventPushToCardDetails = {
  status: "failed",
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `status`                                                                                         | [components.PushToCardTransactionStatus](../../models/components/pushtocardtransactionstatus.md) | :heavy_check_mark:                                                                               | Status of a push-to-card transaction.                                                            |
| `failureCode`                                                                                    | [components.CardTransactionFailureCode](../../models/components/cardtransactionfailurecode.md)   | :heavy_minus_sign:                                                                               | N/A                                                                                              |