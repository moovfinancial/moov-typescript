# RTPServices

## Example Usage

```typescript
import { RTPServices } from "@moovio/sdk/models/components";

let value: RTPServices = {
  receivePayments: true,
  receiveRequestForPayment: true,
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              | Example                                                  |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `receivePayments`                                        | *boolean*                                                | :heavy_check_mark:                                       | Can the institution receive payments                     | true                                                     |
| `receiveRequestForPayment`                               | *boolean*                                                | :heavy_check_mark:                                       | Can the institution receive request for payment messages | true                                                     |