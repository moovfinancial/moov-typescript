# RTPInstitution

## Example Usage

```typescript
import { RTPInstitution } from "@moovio/sdk/models/components";

let value: RTPInstitution = {
  name: "First Citizens",
  routingNumber: "123456789",
  services: {
    receivePayments: true,
    receiveRequestForPayment: true,
  },
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      | Example                                                          |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `name`                                                           | *string*                                                         | :heavy_check_mark:                                               | Name of the financial institution.                               | First Citizens                                                   |
| `routingNumber`                                                  | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              | 123456789                                                        |
| `services`                                                       | [components.RTPServices](../../models/components/rtpservices.md) | :heavy_check_mark:                                               | N/A                                                              |                                                                  |