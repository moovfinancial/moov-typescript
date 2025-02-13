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
    sweepConfigID: "ba8a0431-3de8-477f-bf31-0563edb7efe4",
    walletID: "51bcf741-6972-45e7-9876-037975cbf0b0",
    status: "disabled",
    pushPaymentMethod: {
      paymentMethodID: "ca604767-0a70-4f32-8c59-06033f4d6da0",
    },
    pullPaymentMethod: {
      paymentMethodID: "013cb36d-191f-47e2-8f00-dc337fadd29f",
    },
    createdOn: new Date("2024-05-01T03:02:44.155Z"),
    updatedOn: new Date("2025-04-18T06:42:06.014Z"),
  },
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `headers`                                                        | Record<string, *string*[]>                                       | :heavy_check_mark:                                               | N/A                                                              |
| `result`                                                         | [components.SweepConfig](../../models/components/sweepconfig.md) | :heavy_check_mark:                                               | N/A                                                              |