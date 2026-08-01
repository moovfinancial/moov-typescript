# TransferDestination

## Example Usage

```typescript
import { TransferDestination } from "@moovio/sdk/models/components";

let value: TransferDestination = {
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
    cardAccountUpdater: {
      updatedOn: new Date("2024-05-06T12:20:38.184Z"),
      updateType: "number-update",
    },
    domesticPushToCard: "standard",
    domesticPullFromCard: "supported",
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
  googlePay: {
    tokenID: "dcd471ec-7d5c-4016-865c-1e78c733bea2",
    brand: "Visa",
    cardType: "credit",
    cardDisplayName: "7419",
    fingerprint:
      "9948962d92a1ce40c9f918cd9ece3a22bde62fb325a2f1fe2e833969de672ba3",
    expiration: {
      month: "01",
      year: "21",
    },
    dynamicLastFour: "7419",
    issuerCountry: "US",
    authMethod: "PAN_ONLY",
  },
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `paymentMethodID`                                                                                            | *string*                                                                                                     | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |
| `paymentMethodType`                                                                                          | [components.TransferPaymentMethodType](../../models/components/transferpaymentmethodtype.md)                 | :heavy_minus_sign:                                                                                           | The payment method type that represents a payment rail and directionality                                    |
| `account`                                                                                                    | [components.TransferAccount](../../models/components/transferaccount.md)                                     | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |
| `bankAccount`                                                                                                | [components.TransferPaymentMethodsBankAccount](../../models/components/transferpaymentmethodsbankaccount.md) | :heavy_minus_sign:                                                                                           | A bank account as contained within a payment method.                                                         |
| `wallet`                                                                                                     | [components.TransferPaymentMethodsWallet](../../models/components/transferpaymentmethodswallet.md)           | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |
| `card`                                                                                                       | [components.TransferPaymentMethodsCard](../../models/components/transferpaymentmethodscard.md)               | :heavy_minus_sign:                                                                                           | A card as contained within a payment method.                                                                 |
| `applePay`                                                                                                   | [components.ApplePayResponse](../../models/components/applepayresponse.md)                                   | :heavy_minus_sign:                                                                                           | Describes an Apple Pay token on a Moov account.                                                              |
| `googlePay`                                                                                                  | [components.GooglePayResponse](../../models/components/googlepayresponse.md)                                 | :heavy_minus_sign:                                                                                           | Describes a Google Pay token on a Moov account.                                                              |