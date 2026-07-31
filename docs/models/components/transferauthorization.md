# TransferAuthorization

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
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `authorizationID`                                                                             | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `requestedAmount`                                                                             | [components.AmountDecimal](../../models/components/amountdecimal.md)                          | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `authorizedAmount`                                                                            | [components.AmountDecimal](../../models/components/amountdecimal.md)                          | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `capturedAmount`                                                                              | [components.AmountDecimal](../../models/components/amountdecimal.md)                          | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `capturableAmount`                                                                            | [components.AmountDecimal](../../models/components/amountdecimal.md)                          | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `expiresOn`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |