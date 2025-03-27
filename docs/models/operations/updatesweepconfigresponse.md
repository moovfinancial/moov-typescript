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
    sweepConfigID: "63d276d8-7938-451c-9540-045b5c952066",
    walletID: "c1138be4-284f-403c-868d-a9a1195fde29",
    status: "disabled",
    pushPaymentMethod: {
      paymentMethodID: "0a3940a7-b080-42c3-8122-d9c4ae8d3f1c",
    },
    pullPaymentMethod: {
      paymentMethodID: "18537fa4-f4b4-4ca9-9739-d0be945b5014",
    },
    createdOn: new Date("2024-02-04T07:11:51.056Z"),
    updatedOn: new Date("2025-06-02T20:16:29.197Z"),
  },
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `headers`                                                        | Record<string, *string*[]>                                       | :heavy_check_mark:                                               | N/A                                                              |
| `result`                                                         | [components.SweepConfig](../../models/components/sweepconfig.md) | :heavy_check_mark:                                               | N/A                                                              |