# CardPaymentTransferProcessingDetails

## Example Usage

```typescript
import { CardPaymentTransferProcessingDetails } from "@moovio/sdk/models/components";

let value: CardPaymentTransferProcessingDetails = {};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `status`                                                                                           | [components.CardPaymentTransactionStatus](../../models/components/cardpaymenttransactionstatus.md) | :heavy_minus_sign:                                                                                 | Status of a card payment transaction.                                                              |
| `authorizationCode`                                                                                | *string*                                                                                           | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `networkTransactionID`                                                                             | *string*                                                                                           | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `failureCode`                                                                                      | [components.CardTransactionFailureCode](../../models/components/cardtransactionfailurecode.md)     | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `retrievalReferenceNumber`                                                                         | *string*                                                                                           | :heavy_minus_sign:                                                                                 | The retrieval reference number assigned by the card network to the card payment.                   |