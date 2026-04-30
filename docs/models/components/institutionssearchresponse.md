# InstitutionsSearchResponse

## Example Usage

```typescript
import { InstitutionsSearchResponse } from "@moovio/sdk/models/components";

let value: InstitutionsSearchResponse = {
  ach: [],
  rtp: [],
  wire: [],
  fednow: [
    {
      name: "First Citizens",
      routingNumber: "123456789",
      services: {
        receivePayments: true,
        sendPayments: true,
        requestForPayment: true,
      },
    },
  ],
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `ach`                                                                          | [components.ACHInstitution](../../models/components/achinstitution.md)[]       | :heavy_check_mark:                                                             | N/A                                                                            |
| `rtp`                                                                          | [components.RTPInstitution](../../models/components/rtpinstitution.md)[]       | :heavy_check_mark:                                                             | N/A                                                                            |
| `wire`                                                                         | [components.WireInstitution](../../models/components/wireinstitution.md)[]     | :heavy_check_mark:                                                             | N/A                                                                            |
| `fednow`                                                                       | [components.FedNowInstitution](../../models/components/fednowinstitution.md)[] | :heavy_check_mark:                                                             | N/A                                                                            |