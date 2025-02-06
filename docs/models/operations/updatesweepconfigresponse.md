# UpdateSweepConfigResponse

## Example Usage

```typescript
import { UpdateSweepConfigResponse } from "@moovio/sdk/models/operations";

let value: UpdateSweepConfigResponse = {
  headers: {
    "key": [
      "<value>",
    ],
  },
  result: {
    sweepConfigID: "7c5de878-316c-4ad7-9180-63d276d87938",
    walletID: "1c540045-b5c9-4520-8665-c1138be4284f",
    status: "enabled",
    pushPaymentMethod: {
      paymentMethodID: "c68da9a1-195f-4de2-890b-0a3940a7b080",
    },
    pullPaymentMethod: {
      paymentMethodID: "c3122d9c-4ae8-4d3f-b1c3-18537fa4f4b4",
    },
    createdOn: new Date("2024-12-06T19:21:30.268Z"),
    updatedOn: new Date("2024-09-19T16:28:52.728Z"),
  },
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `headers`                                                        | Record<string, *string*[]>                                       | :heavy_check_mark:                                               | N/A                                                              |
| `result`                                                         | [components.SweepConfig](../../models/components/sweepconfig.md) | :heavy_check_mark:                                               | N/A                                                              |