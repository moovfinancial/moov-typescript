# TransferEventPullFromCardDetails

## Example Usage

```typescript
import { TransferEventPullFromCardDetails } from "@moovio/sdk/models/components";

let value: TransferEventPullFromCardDetails = {
  status: "failed",
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `status`                                                                                             | [components.PullFromCardTransactionStatus](../../models/components/pullfromcardtransactionstatus.md) | :heavy_check_mark:                                                                                   | Status of a pull-from-card transaction.                                                              |
| `failureCode`                                                                                        | [components.CardTransactionFailureCode](../../models/components/cardtransactionfailurecode.md)       | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |