# TransferDestination

## Example Usage

```typescript
import { TransferDestination } from "@moovio/sdk/models/components";

let value: TransferDestination = {
  paymentMethodID: "<id>",
  paymentMethodType: "<value>",
  account: {
    accountID: "<id>",
    email: "Javier91@yahoo.com",
    displayName: "Neal_Kautzer25",
  },
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
    issuer: "discover",
    issuerCountry: "<value>",
    cardAccountUpdater: {
      updatedOn: new Date("2024-05-06T12:20:38.184Z"),
      updateType: "number-update",
    },
    domesticPushToCard: "standard",
    domesticPullFromCard: "supported",
  },
  achDetails: {
    status: "corrected",
    traceNumber: "124782618117",
    companyEntryDescription: "Gym dues",
    originatingCompanyName: "Whole Body Fit",
    debitHoldPeriod: "2-days",
  },
  applePay: {
    brand: "Visa",
    cardType: "credit",
    cardDisplayName: "Visa 1256",
    fingerprint:
      "9948962d92a1ce40c9f918cd9ece3a22bde62fb325a2f1fe2e833969de672ba3",
    expiration: {
      month: "01",
      year: "21",
    },
    dynamicLastFour: "<value>",
    issuerCountry: "US",
  },
  cardDetails: {
    status: "settled",
    dynamicDescriptor: "WhlBdy *Yoga 11-12",
    feeProgram:
      "Visa Signature and Visa Infinite (Spend not-qualified) Product 1",
  },
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `paymentMethodID`                                                                            | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `paymentMethodType`                                                                          | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `account`                                                                                    | [components.TransferAccount](../../models/components/transferaccount.md)                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `bankAccount`                                                                                | [components.PaymentMethodsBankAccount](../../models/components/paymentmethodsbankaccount.md) | :heavy_minus_sign:                                                                           | A bank account as contained within a payment method.                                         |
| `wallet`                                                                                     | [components.PaymentMethodsWallet](../../models/components/paymentmethodswallet.md)           | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `card`                                                                                       | [components.PaymentMethodsCard](../../models/components/paymentmethodscard.md)               | :heavy_minus_sign:                                                                           | A card as contained within a payment method.                                                 |
| `achDetails`                                                                                 | [components.ACHTransactionDetails](../../models/components/achtransactiondetails.md)         | :heavy_minus_sign:                                                                           | ACH specific details about the transaction.                                                  |
| `applePay`                                                                                   | [components.ApplePayResponse](../../models/components/applepayresponse.md)                   | :heavy_minus_sign:                                                                           | Describes an Apple Pay token on a Moov account.                                              |
| `cardDetails`                                                                                | [components.CardTransactionDetails](../../models/components/cardtransactiondetails.md)       | :heavy_minus_sign:                                                                           | Card-specific details about the transaction.                                                 |
| `rtpDetails`                                                                                 | [components.RTPTransactionDetails](../../models/components/rtptransactiondetails.md)         | :heavy_minus_sign:                                                                           | RTP specific details about the transaction.                                                  |