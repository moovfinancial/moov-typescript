# CreateSweepConfigResponse

## Example Usage

```typescript
import { CreateSweepConfigResponse } from "@moovio/sdk/models/operations";

let value: CreateSweepConfigResponse = {
  headers: {
    "key": [
      "<value>",
    ],
  },
  result: {
    sweepConfigID: "0ae43eef-7c16-4334-b7cf-8c2243c3431b",
    walletID: "887597fc-8e61-4f6e-b3c1-86c6ea20dd43",
    status: "enabled",
    pushPaymentMethod: {
      paymentMethodID: "1cb74fda-f14d-4e3d-a75e-6270c9422550",
    },
    pullPaymentMethod: {
      paymentMethodID: "46e6facf-02f8-4e7c-a249-3c9e1a43668b",
    },
    createdOn: new Date("2025-06-01T13:55:54.844Z"),
    updatedOn: new Date("2024-04-06T13:54:31.686Z"),
  },
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `headers`                                                        | Record<string, *string*[]>                                       | :heavy_check_mark:                                               | N/A                                                              |
| `result`                                                         | [components.SweepConfig](../../models/components/sweepconfig.md) | :heavy_check_mark:                                               | N/A                                                              |