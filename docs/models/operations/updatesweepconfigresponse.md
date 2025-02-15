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
    sweepConfigID: "f17cf16c-9e18-49dd-b790-b0a8f26d8d8a",
    walletID: "0e2c95fd-4355-42ee-9d7c-5de878316cad",
    status: "enabled",
    pushPaymentMethod: {
      paymentMethodID: "8063d276-d879-4385-91c5-40045b5c9520",
    },
    pullPaymentMethod: {
      paymentMethodID: "65c1138b-e428-44f0-83c6-8da9a1195fde",
    },
    createdOn: new Date("2024-11-15T16:54:20.128Z"),
    updatedOn: new Date("2023-01-31T13:17:15.125Z"),
  },
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `headers`                                                        | Record<string, *string*[]>                                       | :heavy_check_mark:                                               | N/A                                                              |
| `result`                                                         | [components.SweepConfig](../../models/components/sweepconfig.md) | :heavy_check_mark:                                               | N/A                                                              |