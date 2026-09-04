# PushToCardTransferProcessingDetails

## Example Usage

```typescript
import { PushToCardTransferProcessingDetails } from "@moovio/sdk/models/components";

let value: PushToCardTransferProcessingDetails = {
  status: "initiated",
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `status`                                                                                         | [components.PushToCardTransactionStatus](../../models/components/pushtocardtransactionstatus.md) | :heavy_check_mark:                                                                               | Status of a push-to-card transaction.                                                            |
| `authorizationCode`                                                                              | *string*                                                                                         | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `networkTransactionID`                                                                           | *string*                                                                                         | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `networkResponseCode`                                                                            | *string*                                                                                         | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `failureCode`                                                                                    | [components.CardTransactionFailureCode](../../models/components/cardtransactionfailurecode.md)   | :heavy_minus_sign:                                                                               | N/A                                                                                              |