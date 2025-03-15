# RefundCardDetails

## Example Usage

```typescript
import { RefundCardDetails } from "@moovio/sdk/models/components";

let value: RefundCardDetails = {
  status: "settled",
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `status`                                                                                       | [components.RefundCardStatus](../../models/components/refundcardstatus.md)                     | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `failureCode`                                                                                  | [components.CardTransactionFailureCode](../../models/components/cardtransactionfailurecode.md) | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `initiatedOn`                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)  | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `confirmedOn`                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)  | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `settledOn`                                                                                    | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)  | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `failedOn`                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)  | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `completedOn`                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)  | :heavy_minus_sign:                                                                             | N/A                                                                                            |