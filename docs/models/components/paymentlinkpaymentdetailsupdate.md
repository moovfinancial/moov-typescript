# PaymentLinkPaymentDetailsUpdate

Options for payment links used to collect payment.

## Example Usage

```typescript
import { PaymentLinkPaymentDetailsUpdate } from "moov-sdk/models/components";

let value: PaymentLinkPaymentDetailsUpdate = {
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
| `allowedMethods`                                                                                   | [components.CollectionPaymentMethodType](../../models/components/collectionpaymentmethodtype.md)[] | :heavy_minus_sign:                                                                                 | A list of payment methods that should be supported for this payment link.                          |
| `cardDetails`                                                                                      | [components.CardPaymentDetails](../../models/components/cardpaymentdetails.md)                     | :heavy_minus_sign:                                                                                 | Options for payment links used to collect a card payment.                                          |
| `achDetails`                                                                                       | [components.ACHPaymentDetails](../../models/components/achpaymentdetails.md)                       | :heavy_minus_sign:                                                                                 | Options for payment links used to collect an ACH payment.                                          |