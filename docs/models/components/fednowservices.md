# FedNowServices

## Example Usage

```typescript
import { FedNowServices } from "@moovio/sdk/models/components";

let value: FedNowServices = {
  receivePayments: true,
  sendPayments: true,
  requestForPayment: true,
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            | Example                                                                |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `receivePayments`                                                      | *boolean*                                                              | :heavy_check_mark:                                                     | Indicates if the institution can receive instant payments.             | true                                                                   |
| `sendPayments`                                                         | *boolean*                                                              | :heavy_check_mark:                                                     | Indicates if the institution can send instant payments.                | true                                                                   |
| `requestForPayment`                                                    | *boolean*                                                              | :heavy_check_mark:                                                     | Indicates if the institution can process request for payment messages. | true                                                                   |