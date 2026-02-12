# GetPaymentLinkQRCodeRequest

## Example Usage

```typescript
import { GetPaymentLinkQRCodeRequest } from "@moovio/sdk/models/operations";

let value: GetPaymentLinkQRCodeRequest = {
  accountID: "<id>",
  paymentLinkCode: "uc7ZYKrMhi",
};
```

## Fields

| Field                    | Type                     | Required                 | Description              | Example                  |
| ------------------------ | ------------------------ | ------------------------ | ------------------------ | ------------------------ |
| `accountID`              | *string*                 | :heavy_check_mark:       | The merchant account ID. |                          |
| `paymentLinkCode`        | *string*                 | :heavy_check_mark:       | N/A                      | uc7ZYKrMhi               |