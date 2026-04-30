# MoovWalletPaymentMethod

## Example Usage

```typescript
import { MoovWalletPaymentMethod } from "@moovio/sdk/models/components";

let value: MoovWalletPaymentMethod = {
  paymentMethodID: "<id>",
  paymentMethodType: "moov-wallet",
  wallet: {
    walletID: "<id>",
    partnerAccountID: "<id>",
    walletType: "default",
  },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `paymentMethodID`                                                                  | *string*                                                                           | :heavy_check_mark:                                                                 | ID of the payment method.                                                          |
| `paymentMethodType`                                                                | *"moov-wallet"*                                                                    | :heavy_check_mark:                                                                 | N/A                                                                                |
| `wallet`                                                                           | [components.PaymentMethodsWallet](../../models/components/paymentmethodswallet.md) | :heavy_check_mark:                                                                 | N/A                                                                                |