# SweepConfigPaymentMethod

The payment method used to push or pull funds to a bank account.
The push payment method can only be ach-credit-standard or ach-credit-same-day. The pull payment method can only be ach-debit-fund.

## Example Usage

```typescript
import { SweepConfigPaymentMethod } from "moov-sdk/models/components";

let value: SweepConfigPaymentMethod = {
  paymentMethodID: "f65d8aca-619e-46e8-99d9-1f3b873b1fd8",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `paymentMethodID`                                                                             | *string*                                                                                      | :heavy_check_mark:                                                                            | ID of the payment method.                                                                     |
| `disabledOn`                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |