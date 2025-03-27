# GetSweepConfigResponse

## Example Usage

```typescript
import { GetSweepConfigResponse } from "@moovio/sdk/models/operations";

let value: GetSweepConfigResponse = {
  headers: {
    "key": [
      "<value>",
    ],
  },
  result: {
    sweepConfigID: "7ba8a043-13de-4877-9ff3-10563edb7efe",
    walletID: "d51bcf74-1697-425e-8787-6037975cbf0b",
    status: "enabled",
    pushPaymentMethod: {
      paymentMethodID: "eca60476-70a7-40f3-82c5-906033f4d6da",
    },
    pullPaymentMethod: {
      paymentMethodID: "1013cb36-d191-4f7e-b2f0-0dc337fadd29",
    },
    createdOn: new Date("2023-04-15T19:51:11.119Z"),
    updatedOn: new Date("2024-05-01T03:02:44.155Z"),
  },
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `headers`                                                        | Record<string, *string*[]>                                       | :heavy_check_mark:                                               | N/A                                                              |
| `result`                                                         | [components.SweepConfig](../../models/components/sweepconfig.md) | :heavy_check_mark:                                               | N/A                                                              |