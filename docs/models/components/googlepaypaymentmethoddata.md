# GooglePayPaymentMethodData

  The `paymentMethodData` object from Google Pay's
  [PaymentData](https://developers.google.com/pay/api/web/reference/response-objects#PaymentData) response.

## Example Usage

```typescript
import { GooglePayPaymentMethodData } from "@moovio/sdk/models/components";

let value: GooglePayPaymentMethodData = {
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
};
```

## Fields

| Field                                                                                                                                              | Type                                                                                                                                               | Required                                                                                                                                           | Description                                                                                                                                        | Example                                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                             | [components.Type](../../models/components/type.md)                                                                                                 | :heavy_minus_sign:                                                                                                                                 | The type of payment method. Always `CARD`.                                                                                                         | CARD                                                                                                                                               |
| `description`                                                                                                                                      | *string*                                                                                                                                           | :heavy_minus_sign:                                                                                                                                 | A user-facing description of the payment method.                                                                                                   |                                                                                                                                                    |
| `info`                                                                                                                                             | [components.GooglePayCardInfo](../../models/components/googlepaycardinfo.md)                                                                       | :heavy_check_mark:                                                                                                                                 |   Unencrypted card metadata from<br/>  [CardInfo](https://developers.google.com/pay/api/web/reference/response-objects#CardInfo).                  |                                                                                                                                                    |
| `tokenizationData`                                                                                                                                 | [components.GooglePayTokenizationData](../../models/components/googlepaytokenizationdata.md)                                                       | :heavy_check_mark:                                                                                                                                 |   Contains the encrypted payment token from Google Pay.<br/><br/>  The `token` field is a JSON-encoded string containing the ECv2 encrypted payment token. |                                                                                                                                                    |