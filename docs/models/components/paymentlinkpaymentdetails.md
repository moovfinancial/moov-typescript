# PaymentLinkPaymentDetails

Options for payment links used to collect payment.

## Example Usage

```typescript
import { PaymentLinkPaymentDetails } from "@moovio/sdk/models/components";

let value: PaymentLinkPaymentDetails = {
  allowedMethods: [],
  amountRange: {
    minimum: {
      currency: "USD",
      valueDecimal: "12.987654321",
    },
    maximum: {
      currency: "USD",
      valueDecimal: "12.987654321",
    },
  },
  suggestedAmounts: [
    {
      currency: "USD",
      valueDecimal: "12.987654321",
    },
  ],
  cardDetails: {
    dynamicDescriptor: "WhlBdy *Yoga 11-12",
  },
  achDetails: {
    companyEntryDescription: "Gym dues",
    originatingCompanyName: "Whole Body Fit",
  },
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `allowedMethods`                                                                                   | [components.CollectionPaymentMethodType](../../models/components/collectionpaymentmethodtype.md)[] | :heavy_check_mark:                                                                                 | A list of payment methods that should be supported for this payment link.                          |
| `amountType`                                                                                       | [components.AmountType](../../models/components/amounttype.md)                                     | :heavy_minus_sign:                                                                                 | Indicates whether the payment amount is fixed by the merchant or open for the buyer to choose.     |
| `amountRange`                                                                                      | [components.AmountDecimalRange](../../models/components/amountdecimalrange.md)                     | :heavy_minus_sign:                                                                                 | The minimum and maximum amounts the buyer can specify when `amountType` is `open`.                 |
| `suggestedAmounts`                                                                                 | [components.AmountDecimal](../../models/components/amountdecimal.md)[]                             | :heavy_minus_sign:                                                                                 | Optional preset amounts displayed to the buyer when `amountType` is `open`.                        |
| `cardDetails`                                                                                      | [components.CardPaymentDetails](../../models/components/cardpaymentdetails.md)                     | :heavy_minus_sign:                                                                                 | Options for payment links used to collect a card payment.                                          |
| `achDetails`                                                                                       | [components.ACHPaymentDetails](../../models/components/achpaymentdetails.md)                       | :heavy_minus_sign:                                                                                 | Options for payment links used to collect an ACH payment.                                          |
| `metadata`                                                                                         | Record<string, *string*>                                                                           | :heavy_minus_sign:                                                                                 | Optional free-form metadata for the transfer.                                                      |