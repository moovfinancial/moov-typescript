# PullFromCardPaymentMethod

## Example Usage

```typescript
import { PullFromCardPaymentMethod } from "@moovio/sdk/models/components";

let value: PullFromCardPaymentMethod = {
  paymentMethodID: "07caf025-08a6-46e9-8453-4aa48d404f01",
  paymentMethodType: "pull-from-card",
  card: {
    cardID: "01234567-89ab-cdef-0123-456789abcdef",
    fingerprint:
      "9948962d92a1ce40c9f918cd9ece3a22bde62fb325a2f1fe2e833969de672ba3",
    brand: "Visa",
    cardType: "credit",
    lastFourCardNumber: "<value>",
    bin: "<value>",
    expiration: {
      month: "01",
      year: "21",
    },
    holderName: "<value>",
    billingAddress: {
      addressLine1: "123 Main Street",
      addressLine2: "Apt 302",
      city: "Boulder",
      stateOrProvince: "CO",
      postalCode: "80301",
      country: "US",
    },
    cardVerification: {
      cvv: "match",
      addressLine1: "match",
      postalCode: "match",
      accountName: {
        firstName: "match",
        lastName: "match",
        middleName: "match",
        fullName: "match",
      },
    },
    issuer: "mastercard",
    issuerCountry: "<value>",
    cardAccountUpdater: {
      updatedOn: new Date("2024-05-06T12:20:38.184Z"),
      updateType: "number-update",
    },
    domesticPushToCard: "standard",
    domesticPullFromCard: "supported",
  },
};
```

## Fields

| Field                                                                                                                          | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `paymentMethodID`                                                                                                              | *string*                                                                                                                       | :heavy_check_mark:                                                                                                             | ID of the payment method.                                                                                                      |
| `paymentMethodType`                                                                                                            | [components.PullFromCardPaymentMethodPaymentMethodType](../../models/components/pullfromcardpaymentmethodpaymentmethodtype.md) | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `card`                                                                                                                         | [components.PaymentMethodsCard](../../models/components/paymentmethodscard.md)                                                 | :heavy_check_mark:                                                                                                             | A card as contained within a payment method.                                                                                   |