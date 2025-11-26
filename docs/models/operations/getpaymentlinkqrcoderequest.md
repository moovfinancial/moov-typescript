# GetPaymentLinkQRCodeRequest

## Example Usage

```typescript
import { GetPaymentLinkQRCodeRequest } from "@moovio/sdk/models/operations";

let value: GetPaymentLinkQRCodeRequest = {
  accountID: "cd290adc-0bdb-4122-a3f2-fd49e2c2eacc",
  paymentLinkCode: "uc7ZYKrMhi",
};
```

## Fields

| Field                    | Type                     | Required                 | Description              | Example                  |
| ------------------------ | ------------------------ | ------------------------ | ------------------------ | ------------------------ |
| `accountID`              | *string*                 | :heavy_check_mark:       | The merchant account ID. |                          |
| `paymentLinkCode`        | *string*                 | :heavy_check_mark:       | N/A                      | uc7ZYKrMhi               |