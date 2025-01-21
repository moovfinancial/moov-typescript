# CreateTransfer

## Example Usage

```typescript
import { CreateTransfer } from "moov-sdk/models/components";

let value: CreateTransfer = {
  source: {
    cardDetails: {
      dynamicDescriptor: "WhlBdy *Yoga 11-12",
    },
    achDetails: {
      companyEntryDescription: "Gym dues",
      originatingCompanyName: "Whole Body Fit",
      debitHoldPeriod: "2-days",
    },
  },
  destination: {
    paymentMethodID: "<id>",
    cardDetails: {
      dynamicDescriptor: "WhlBdy *Yoga 11-12",
    },
    achDetails: {
      companyEntryDescription: "Gym dues",
      originatingCompanyName: "Whole Body Fit",
    },
  },
  amount: {
    currency: "CFA Franc BCEAO",
    value: 288348,
  },
  facilitatorFee: {
    totalDecimal: "12.987654321",
    markupDecimal: "0.987654321",
  },
  description: "Pay Instructor for May 15 Class",
  metadata: {
    "optional": "metadata",
  },
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          | Example                                                                                                              |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `source`                                                                                                             | [components.CreateTransferSource](../../models/components/createtransfersource.md)                                   | :heavy_check_mark:                                                                                                   | Where funds for a transfer originate. For the source, you must include either a `paymentMethodID` or a `transferID`. |                                                                                                                      |
| `destination`                                                                                                        | [components.CreateTransferDestination](../../models/components/createtransferdestination.md)                         | :heavy_check_mark:                                                                                                   | The final stage of a transfer and the ultimate recipient of the funds.                                               |                                                                                                                      |
| `amount`                                                                                                             | [components.Amount](../../models/components/amount.md)                                                               | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |                                                                                                                      |
| `facilitatorFee`                                                                                                     | [components.FacilitatorFee](../../models/components/facilitatorfee.md)                                               | :heavy_minus_sign:                                                                                                   | Total or markup fee.                                                                                                 |                                                                                                                      |
| `description`                                                                                                        | *string*                                                                                                             | :heavy_minus_sign:                                                                                                   | An optional description of the transfer for your own internal use.                                                   | Pay Instructor for May 15 Class                                                                                      |
| `metadata`                                                                                                           | Record<string, *string*>                                                                                             | :heavy_minus_sign:                                                                                                   | Free-form key-value pair list. Useful for storing information that is not captured elsewhere.                        | {<br/>"optional": "metadata"<br/>}                                                                                   |