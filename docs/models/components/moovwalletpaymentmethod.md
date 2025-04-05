# MoovWalletPaymentMethod

## Example Usage

```typescript
import { MoovWalletPaymentMethod } from "@moovio/sdk/models/components";

let value: MoovWalletPaymentMethod = {
  paymentMethodID: "df2b5170-e803-40ad-add9-98852d70c011",
  paymentMethodType: "moov-wallet",
  wallet: {
    walletID: "803dcbf2-38c1-49cc-90a2-81256e054b6f",
  },
};
```

## Fields

| Field                                                                                                                      | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `paymentMethodID`                                                                                                          | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | ID of the payment method.                                                                                                  |
| `paymentMethodType`                                                                                                        | [components.MoovWalletPaymentMethodPaymentMethodType](../../models/components/moovwalletpaymentmethodpaymentmethodtype.md) | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `wallet`                                                                                                                   | [components.PaymentMethodsWallet](../../models/components/paymentmethodswallet.md)                                         | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |