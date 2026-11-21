# PaymentToken

A single-use payment token.

## Example Usage

```typescript
import { PaymentToken } from "@moovio/sdk/models/components";

let value: PaymentToken = {
  token: "<value>",
  type: "card",
  expiresOn: new Date("2026-06-28T22:51:02.537Z"),
};
```

## Fields

| Field                                                                                                                                                       | Type                                                                                                                                                        | Required                                                                                                                                                    | Description                                                                                                                                                 |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `token`                                                                                                                                                     | *string*                                                                                                                                                    | :heavy_check_mark:                                                                                                                                          | The payment token. Pass it unchanged as `source.paymentToken.token` when creating a transfer.<br/><br/>It can be used for one transfer, and only until `expiresOn`. |
| `type`                                                                                                                                                      | [components.PaymentTokenType](../../models/components/paymenttokentype.md)                                                                                  | :heavy_check_mark:                                                                                                                                          | The kind of payment data the token holds. `card` when the request sent `card`.                                                                              |
| `expiresOn`                                                                                                                                                 | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                               | :heavy_check_mark:                                                                                                                                          | When the token expires.                                                                                                                                     |