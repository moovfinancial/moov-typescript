# PaymentLinkCustomAmountPaymentDetails

Options for custom amount payment links.

A custom amount payment link shares all the options of a `payment` link, but the payor chooses how much to
pay rather than the merchant fixing the amount. The amount may optionally be constrained to a range.

## Example Usage

```typescript
import { PaymentLinkCustomAmountPaymentDetails } from "@moovio/sdk/models/components";

let value: PaymentLinkCustomAmountPaymentDetails = {
  allowedMethods: [
    "ach-debit-collect",
  ],
  cardDetails: {
    dynamicDescriptor: "WhlBdy *Yoga 11-12",
  },
  achDetails: {
    companyEntryDescription: "Gym dues",
    originatingCompanyName: "Whole Body Fit",
  },
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
};
```

## Fields

| Field                                                                                                                                  | Type                                                                                                                                   | Required                                                                                                                               | Description                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `allowedMethods`                                                                                                                       | [components.CollectionPaymentMethodType](../../models/components/collectionpaymentmethodtype.md)[]                                     | :heavy_check_mark:                                                                                                                     | A list of payment methods that should be supported for this payment link.                                                              |
| `cardDetails`                                                                                                                          | [components.CardPaymentDetails](../../models/components/cardpaymentdetails.md)                                                         | :heavy_minus_sign:                                                                                                                     | Options for payment links used to collect a card payment.                                                                              |
| `achDetails`                                                                                                                           | [components.ACHPaymentDetails](../../models/components/achpaymentdetails.md)                                                           | :heavy_minus_sign:                                                                                                                     | Options for payment links used to collect an ACH payment.                                                                              |
| `metadata`                                                                                                                             | Record<string, *string*>                                                                                                               | :heavy_minus_sign:                                                                                                                     | Optional free-form metadata for the transfer.                                                                                          |
| `amountRange`                                                                                                                          | [components.AmountDecimalRange](../../models/components/amountdecimalrange.md)                                                         | :heavy_minus_sign:                                                                                                                     | The minimum and maximum amounts the payor can specify.<br/><br/>When omitted, the payor may enter any amount. Both bounds must use USD. |
| `suggestedAmounts`                                                                                                                     | [components.AmountDecimal](../../models/components/amountdecimal.md)[]                                                                 | :heavy_minus_sign:                                                                                                                     | Optional preset amounts displayed to the payor.<br/><br/>Each suggested amount must use USD and, when an `amountRange` is set, fall within it. |