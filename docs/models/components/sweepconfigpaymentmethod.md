# SweepConfigPaymentMethod

The payment method used to push or pull funds to a bank account.
The push payment method can only be ach-credit-standard or ach-credit-same-day. The pull payment method can only be ach-debit-fund.

## Example Usage

```typescript
import { SweepConfigPaymentMethod } from "@moovio/sdk/models/components";

let value: SweepConfigPaymentMethod = {
  paymentMethodID: "6e9c0668-60c3-4fcf-bfef-7372e645b475",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `paymentMethodID`                                                                             | *string*                                                                                      | :heavy_check_mark:                                                                            | ID of the payment method.                                                                     |
| `disabledOn`                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |