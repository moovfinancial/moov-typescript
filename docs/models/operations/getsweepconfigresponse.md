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
    sweepConfigID: "57cd4c37-ba8a-4043-b13d-e877ff310563",
    walletID: "db7efe4d-51bc-4f74-9169-725e78760379",
    status: "enabled",
    pushPaymentMethod: {
      paymentMethodID: "cbf0b04e-ca60-4476-870a-70f32c590603",
    },
    pullPaymentMethod: {
      paymentMethodID: "f4d6da01-013c-4b36-9d19-1f7e2f00dc33",
    },
    createdOn: new Date("2025-10-31T04:31:16.287Z"),
    updatedOn: new Date("2024-11-16T23:19:08.981Z"),
  },
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `headers`                                                        | Record<string, *string*[]>                                       | :heavy_check_mark:                                               | N/A                                                              |
| `result`                                                         | [components.SweepConfig](../../models/components/sweepconfig.md) | :heavy_check_mark:                                               | N/A                                                              |