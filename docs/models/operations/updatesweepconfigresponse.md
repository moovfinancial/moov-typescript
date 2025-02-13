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
    sweepConfigID: "3d276d87-9385-41c5-b400-45b5c9520665",
    walletID: "1138be42-84f0-43c6-a8da-9a1195fde290",
    status: "enabled",
    pushPaymentMethod: {
      paymentMethodID: "a3940a7b-0802-4c31-822d-9c4ae8d3f1c3",
    },
    pullPaymentMethod: {
      paymentMethodID: "8537fa4f-4b4c-4a97-939d-0be945b50146",
    },
    createdOn: new Date("2025-06-02T20:16:29.197Z"),
    updatedOn: new Date("2023-08-31T20:30:44.252Z"),
  },
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `headers`                                                        | Record<string, *string*[]>                                       | :heavy_check_mark:                                               | N/A                                                              |
| `result`                                                         | [components.SweepConfig](../../models/components/sweepconfig.md) | :heavy_check_mark:                                               | N/A                                                              |