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
    payout: {
      allowedMethods: [
        "push-to-card",
        "rtp-credit",
      ],
      recipient: {
        email: "jordan@example.com",
      },
    },
  },
};
```

## Fields

| Field                                                                                                                                                                 | Type                                                                                                                                                                  | Required                                                                                                                                                              | Description                                                                                                                                                           | Example                                                                                                                                                               |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `accountID`                                                                                                                                                           | *string*                                                                                                                                                              | :heavy_check_mark:                                                                                                                                                    | The merchant account ID.                                                                                                                                              |                                                                                                                                                                       |
| `paymentLinkCode`                                                                                                                                                     | *string*                                                                                                                                                              | :heavy_check_mark:                                                                                                                                                    | N/A                                                                                                                                                                   | uc7ZYKrMhi                                                                                                                                                            |
| `updatePaymentLink`                                                                                                                                                   | [components.UpdatePaymentLink](../../models/components/updatepaymentlink.md)                                                                                          | :heavy_check_mark:                                                                                                                                                    | N/A                                                                                                                                                                   | {<br/>"amount": {<br/>"currency": "USD",<br/>"value": 12099<br/>},<br/>"payout": {<br/>"allowedMethods": [<br/>"push-to-card",<br/>"rtp-credit"<br/>],<br/>"recipient": {<br/>"email": "jordan@example.com"<br/>}<br/>}<br/>} |