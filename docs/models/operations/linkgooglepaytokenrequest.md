# LinkGooglePayTokenRequest

## Example Usage

```typescript
import { LinkGooglePayTokenRequest } from "@moovio/sdk/models/operations";

let value: LinkGooglePayTokenRequest = {
  accountID: "<id>",
  linkGooglePay: {
    merchantAccountID: "c5f78a7e-2fb0-4e4a-bcf0-9e1f8b0e5c7a",
    paymentMethodData: {
      type: "CARD",
      info: {
        cardNetwork: "VISA",
        cardDetails: "1234",
        cardFundingSource: "DEBIT",
        billingAddress: {
          countryCode: "US",
        },
      },
      tokenizationData: {
        type: "PAYMENT_GATEWAY",
        token: "<value>",
      },
    },
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `accountID`                                                          | *string*                                                             | :heavy_check_mark:                                                   | ID of the Moov account representing the cardholder.                  |
| `linkGooglePay`                                                      | [components.LinkGooglePay](../../models/components/linkgooglepay.md) | :heavy_check_mark:                                                   | N/A                                                                  |