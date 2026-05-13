# UpdatePaymentLinkRequest

## Example Usage

```typescript
import { UpdatePaymentLinkRequest } from "@moovio/sdk/models/operations";

let value: UpdatePaymentLinkRequest = {
  accountID: "<id>",
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
    amountDetails: {
      tax: {
        currency: "USD",
        valueDecimal: "9.25",
      },
    },
  },
};
```

## Fields

| Field                                                                                                                                                                                        | Type                                                                                                                                                                                         | Required                                                                                                                                                                                     | Description                                                                                                                                                                                  | Example                                                                                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `accountID`                                                                                                                                                                                  | *string*                                                                                                                                                                                     | :heavy_check_mark:                                                                                                                                                                           | The merchant account ID.                                                                                                                                                                     |                                                                                                                                                                                              |
| `paymentLinkCode`                                                                                                                                                                            | *string*                                                                                                                                                                                     | :heavy_check_mark:                                                                                                                                                                           | N/A                                                                                                                                                                                          | uc7ZYKrMhi                                                                                                                                                                                   |
| `updatePaymentLink`                                                                                                                                                                          | [components.UpdatePaymentLink](../../models/components/updatepaymentlink.md)                                                                                                                 | :heavy_check_mark:                                                                                                                                                                           | N/A                                                                                                                                                                                          | {<br/>"amount": {<br/>"currency": "USD",<br/>"value": 12099<br/>},<br/>"amountDetails": {<br/>"tax": {<br/>"currency": "USD",<br/>"valueDecimal": "9.25"<br/>}<br/>},<br/>"customer": {<br/>"requirePhone": true,<br/>"requireAddress": true<br/>}<br/>} |