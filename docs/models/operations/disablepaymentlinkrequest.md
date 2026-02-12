# DisablePaymentLinkRequest

## Example Usage

```typescript
import { DisablePaymentLinkRequest } from "@moovio/sdk/models/operations";

let value: DisablePaymentLinkRequest = {
  accountID: "<id>",
  paymentLinkCode: "uc7ZYKrMhi",
};
```

## Fields

| Field                    | Type                     | Required                 | Description              | Example                  |
| ------------------------ | ------------------------ | ------------------------ | ------------------------ | ------------------------ |
| `accountID`              | *string*                 | :heavy_check_mark:       | The merchant account ID. |                          |
| `paymentLinkCode`        | *string*                 | :heavy_check_mark:       | N/A                      | uc7ZYKrMhi               |