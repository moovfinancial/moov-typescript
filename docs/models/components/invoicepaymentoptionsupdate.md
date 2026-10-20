# InvoicePaymentOptionsUpdate

Payment options to update on an invoice.

## Example Usage

```typescript
import { InvoicePaymentOptionsUpdate } from "@moovio/sdk/models/components";

let value: InvoicePaymentOptionsUpdate = {
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

| Field                                                                                                                                                                                                                  | Type                                                                                                                                                                                                                   | Required                                                                                                                                                                                                               | Description                                                                                                                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `allowedMethods`                                                                                                                                                                                                       | [components.CollectionPaymentMethodType](../../models/components/collectionpaymentmethodtype.md)[]                                                                                                                     | :heavy_minus_sign:                                                                                                                                                                                                     | Payment methods the customer can use to pay the invoice. Omit to leave unchanged. Set to null to allow all methods the merchant supports. The request is rejected if a listed method is not supported by the merchant. |
| `cardDetails`                                                                                                                                                                                                          | [components.CardPaymentDetails](../../models/components/cardpaymentdetails.md)                                                                                                                                         | :heavy_minus_sign:                                                                                                                                                                                                     | Options for payment links used to collect a card payment.                                                                                                                                                              |
| `achDetails`                                                                                                                                                                                                           | [components.ACHPaymentDetails](../../models/components/achpaymentdetails.md)                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                                                                     | Options for payment links used to collect an ACH payment.                                                                                                                                                              |