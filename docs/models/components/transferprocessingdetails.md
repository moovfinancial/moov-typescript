# TransferProcessingDetails

## Example Usage

```typescript
import { TransferProcessingDetails } from "@moovio/sdk/models/components";

let value: TransferProcessingDetails = {
  achDebit: {
    status: "",
    traceNumber: "124782618117",
  },
  achCredit: {
    status: "corrected",
    traceNumber: "124782618117",
  },
};
```

## Fields

| Field                                                                                                                          | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `cardPayment`                                                                                                                  | [components.CardPaymentTransferProcessingDetails](../../models/components/cardpaymenttransferprocessingdetails.md)             | :heavy_minus_sign:                                                                                                             | N/A                                                                                                                            |
| `pushToCard`                                                                                                                   | [components.PushToCardTransferProcessingDetails](../../models/components/pushtocardtransferprocessingdetails.md)               | :heavy_minus_sign:                                                                                                             | N/A                                                                                                                            |
| `pullFromCard`                                                                                                                 | [components.PullFromCardTransferProcessingDetails](../../models/components/pullfromcardtransferprocessingdetails.md)           | :heavy_minus_sign:                                                                                                             | N/A                                                                                                                            |
| `achDebit`                                                                                                                     | [components.ACHDebitTransferProcessingDetails](../../models/components/achdebittransferprocessingdetails.md)                   | :heavy_minus_sign:                                                                                                             | N/A                                                                                                                            |
| `achCredit`                                                                                                                    | [components.ACHCreditTransferProcessingDetails](../../models/components/achcredittransferprocessingdetails.md)                 | :heavy_minus_sign:                                                                                                             | N/A                                                                                                                            |
| `instantBankCredit`                                                                                                            | [components.InstantBankCreditTransferProcessingDetails](../../models/components/instantbankcredittransferprocessingdetails.md) | :heavy_minus_sign:                                                                                                             | N/A                                                                                                                            |
| `wire`                                                                                                                         | [components.WireTransferProcessingDetails](../../models/components/wiretransferprocessingdetails.md)                           | :heavy_minus_sign:                                                                                                             | Wire-specific processing details returned on a transfer.                                                                       |