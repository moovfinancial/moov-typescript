# FedNowInstitution

## Example Usage

```typescript
import { FedNowInstitution } from "@moovio/sdk/models/components";

let value: FedNowInstitution = {
  name: "First Citizens",
  routingNumber: "123456789",
  services: {
    receivePayments: true,
    sendPayments: true,
    requestForPayment: true,
  },
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            | Example                                                                |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `name`                                                                 | *string*                                                               | :heavy_check_mark:                                                     | Name of the financial institution.                                     | First Citizens                                                         |
| `routingNumber`                                                        | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    | 123456789                                                              |
| `services`                                                             | [components.FedNowServices](../../models/components/fednowservices.md) | :heavy_check_mark:                                                     | N/A                                                                    |                                                                        |