# UpdatePaymentLinkRequest

## Example Usage

```typescript
import { UpdatePaymentLinkRequest } from "@moovio/sdk/models/operations";

let value: UpdatePaymentLinkRequest = {
  accountID: "7f9e02a6-d6b9-41bb-a185-761213d06c13",
  paymentLinkCode: "uc7ZYKrMhi",
  updatePaymentLink: {
    amount: {
      currency: "USD",
      value: 12099,
    },
    customer: {
      requireAddress: true,
      requirePhone: true,
    },
  },
};
```

## Fields

| Field                                                                                                             | Type                                                                                                              | Required                                                                                                          | Description                                                                                                       | Example                                                                                                           |
| ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| `accountID`                                                                                                       | *string*                                                                                                          | :heavy_check_mark:                                                                                                | N/A                                                                                                               |                                                                                                                   |
| `paymentLinkCode`                                                                                                 | *string*                                                                                                          | :heavy_check_mark:                                                                                                | N/A                                                                                                               | uc7ZYKrMhi                                                                                                        |
| `updatePaymentLink`                                                                                               | [components.UpdatePaymentLink](../../models/components/updatepaymentlink.md)                                      | :heavy_check_mark:                                                                                                | N/A                                                                                                               | {<br/>"amount": {<br/>"currency": "USD",<br/>"value": 12099<br/>},<br/>"customer": {<br/>"requirePhone": true,<br/>"requireAddress": true<br/>}<br/>} |