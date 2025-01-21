# MoovWalletPaymentMethod

## Example Usage

```typescript
import { MoovWalletPaymentMethod } from "moov-sdk/models/components";

let value: MoovWalletPaymentMethod = {
  paymentMethodID: "7e5782bd-040f-4af8-8c55-6a5ef031037d",
  paymentMethodType: "moov-wallet",
  wallet: "<value>",
};
```

## Fields

| Field                                                                                                                      | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `paymentMethodID`                                                                                                          | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | ID of the payment method.                                                                                                  |
| `paymentMethodType`                                                                                                        | [components.MoovWalletPaymentMethodPaymentMethodType](../../models/components/moovwalletpaymentmethodpaymentmethodtype.md) | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `wallet`                                                                                                                   | *any*                                                                                                                      | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |