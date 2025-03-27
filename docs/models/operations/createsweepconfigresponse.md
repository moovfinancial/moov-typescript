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
    sweepConfigID: "2c9165a6-acb9-4e38-9c33-ace7b25a2f2c",
    walletID: "b6be92f8-36be-4e2d-9967-cda0c067846c",
    status: "disabled",
    pushPaymentMethod: {
      paymentMethodID: "02e70971-59ae-4711-962e-3685a9fd9799",
    },
    pullPaymentMethod: {
      paymentMethodID: "28460a0b-329f-46d0-88a6-206bf74517a9",
    },
    createdOn: new Date("2024-11-25T13:41:08.143Z"),
    updatedOn: new Date("2024-12-30T14:12:56.950Z"),
  },
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `headers`                                                        | Record<string, *string*[]>                                       | :heavy_check_mark:                                               | N/A                                                              |
| `result`                                                         | [components.SweepConfig](../../models/components/sweepconfig.md) | :heavy_check_mark:                                               | N/A                                                              |