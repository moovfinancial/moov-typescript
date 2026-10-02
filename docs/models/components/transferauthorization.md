# TransferAuthorization

Authorization and capture amounts for an auth-capture `card-payment` transfer.

## Example Usage

```typescript
import { TransferAuthorization } from "@moovio/sdk/models/components";

let value: TransferAuthorization = {
  authorizationID: "<id>",
  requestedAmount: {
    currency: "USD",
    valueDecimal: "12.987654321",
  },
  authorizedAmount: {
    currency: "USD",
    valueDecimal: "12.987654321",
  },
  capturedAmount: {
    currency: "USD",
    valueDecimal: "12.987654321",
  },
  capturableAmount: {
    currency: "USD",
    valueDecimal: "12.987654321",
  },
  amountDetails: {
    tip: {
      currency: "USD",
      valueDecimal: "12.987654321",
    },
    tax: {
      currency: "USD",
      valueDecimal: "12.987654321",
    },
    surcharge: {
      currency: "USD",
      valueDecimal: "12.987654321",
    },
  },
};
```

## Fields

| Field                                                                                                                                                                                                                          | Type                                                                                                                                                                                                                           | Required                                                                                                                                                                                                                       | Description                                                                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `authorizationID`                                                                                                                                                                                                              | *string*                                                                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                                                                             | Identifier for the authorization.                                                                                                                                                                                              |
| `requestedAmount`                                                                                                                                                                                                              | [components.AmountDecimal](../../models/components/amountdecimal.md)                                                                                                                                                           | :heavy_check_mark:                                                                                                                                                                                                             | Amount submitted for authorization.                                                                                                                                                                                            |
| `authorizedAmount`                                                                                                                                                                                                             | [components.AmountDecimal](../../models/components/amountdecimal.md)                                                                                                                                                           | :heavy_check_mark:                                                                                                                                                                                                             | Hold approved by the issuer.                                                                                                                                                                                                   |
| `capturedAmount`                                                                                                                                                                                                               | [components.AmountDecimal](../../models/components/amountdecimal.md)                                                                                                                                                           | :heavy_check_mark:                                                                                                                                                                                                             | Cumulative amount of captures that have not failed or been canceled.                                                                                                                                                           |
| `capturableAmount`                                                                                                                                                                                                             | [components.AmountDecimal](../../models/components/amountdecimal.md)                                                                                                                                                           | :heavy_check_mark:                                                                                                                                                                                                             | Amount of the authorization still available after captures and authorization cancellations.                                                                                                                                    |
| `amountDetails`                                                                                                                                                                                                                | [components.TransferAmountDetails](../../models/components/transferamountdetails.md)                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                                                                             | The tip, tax, and surcharge authorized by the card network.<br/><br/>These describe the authorized amount and are fixed.<br/>They can differ from the transfer's `amountDetails`, which is the aggregate of all captures' `amountDetails`. |
| `expiresOn`                                                                                                                                                                                                                    | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                                                                             | Expiration time for the approved authorization, when available.                                                                                                                                                                |