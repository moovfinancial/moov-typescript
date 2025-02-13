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
    sweepConfigID: "c9165a6a-cb9e-438c-a33a-ce7b25a2f2c5",
    walletID: "6be92f83-6bee-42d9-b67c-da0c067846c4",
    status: "enabled",
    pushPaymentMethod: {
      paymentMethodID: "2e709715-9ae7-4116-82e3-685a9fd97994",
    },
    pullPaymentMethod: {
      paymentMethodID: "8460a0b3-29f6-4d08-aa62-06bf74517a90",
    },
    createdOn: new Date("2024-12-30T14:12:56.950Z"),
    updatedOn: new Date("2024-07-04T05:15:11.502Z"),
  },
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `headers`                                                        | Record<string, *string*[]>                                       | :heavy_check_mark:                                               | N/A                                                              |
| `result`                                                         | [components.SweepConfig](../../models/components/sweepconfig.md) | :heavy_check_mark:                                               | N/A                                                              |