# PullFromCardTransferProcessingDetails

## Example Usage

```typescript
import { PullFromCardTransferProcessingDetails } from "@moovio/sdk/models/components";

let value: PullFromCardTransferProcessingDetails = {
  status: "failed",
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `status`                                                                                             | [components.PullFromCardTransactionStatus](../../models/components/pullfromcardtransactionstatus.md) | :heavy_check_mark:                                                                                   | Status of a pull-from-card transaction.                                                              |
| `authorizationCode`                                                                                  | *string*                                                                                             | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `networkTransactionID`                                                                               | *string*                                                                                             | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `networkResponseCode`                                                                                | *string*                                                                                             | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `failureCode`                                                                                        | [components.CardTransactionFailureCode](../../models/components/cardtransactionfailurecode.md)       | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |