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
    sweepConfigID: "f7c57fb0-34fc-4a1c-b22d-01e4ca1c3b68",
    walletID: "44459ce0-a99c-4fb2-bfd4-1cf2a00cd57c",
    status: "enabled",
    pushPaymentMethod: {
      paymentMethodID: "c37ba8a0-4313-4de8-b77f-f310563edb7e",
    },
    pullPaymentMethod: {
      paymentMethodID: "e4d51bcf-7416-4972-85e7-876037975cbf",
    },
    createdOn: new Date("2025-03-26T12:15:57.035Z"),
    updatedOn: new Date("2023-03-09T06:25:51.048Z"),
  },
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `headers`                                                        | Record<string, *string*[]>                                       | :heavy_check_mark:                                               | N/A                                                              |
| `result`                                                         | [components.SweepConfig](../../models/components/sweepconfig.md) | :heavy_check_mark:                                               | N/A                                                              |