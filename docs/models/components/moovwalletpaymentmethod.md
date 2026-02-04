# MoovWalletPaymentMethod

## Example Usage

```typescript
import { MoovWalletPaymentMethod } from "@moovio/sdk/models/components";

let value: MoovWalletPaymentMethod = {
  paymentMethodID: "230e5787-9448-4b31-b468-95e051e5a131",
  paymentMethodType: "moov-wallet",
  wallet: {
    walletID: "3e095e99-464f-4d24-b1e1-1dd152488431",
    partnerAccountID: "58b17cf8-0ee7-46b8-a22d-cb69ead37220",
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