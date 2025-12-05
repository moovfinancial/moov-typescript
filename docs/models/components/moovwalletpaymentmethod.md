# MoovWalletPaymentMethod

## Example Usage

```typescript
import { MoovWalletPaymentMethod } from "@moovio/sdk/models/components";

let value: MoovWalletPaymentMethod = {
  paymentMethodID: "230e5787-9448-4b31-b468-95e051e5a131",
  paymentMethodType: "moov-wallet",
  wallet: {
    walletID: "5b8fabc3-cfb4-4c3b-a98d-557a1ffd26cc",
    partnerAccountID: "e4f5a400-b4d3-491b-a89a-484206ac0d0a",
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