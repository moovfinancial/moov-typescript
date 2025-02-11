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
    sweepConfigID: "18063d27-6d87-4938-851c-540045b5c952",
    walletID: "665c1138-be42-484f-b03c-68da9a1195fd",
    status: "enabled",
    pushPaymentMethod: {
      paymentMethodID: "90b0a394-0a7b-4080-b2c3-122d9c4ae8d3",
    },
    pullPaymentMethod: {
      paymentMethodID: "1c318537-fa4f-44b4-8ca9-739d0be945b5",
    },
    createdOn: new Date("2023-04-26T15:33:11.600Z"),
    updatedOn: new Date("2023-11-09T17:35:35.144Z"),
  },
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `headers`                                                        | Record<string, *string*[]>                                       | :heavy_check_mark:                                               | N/A                                                              |
| `result`                                                         | [components.SweepConfig](../../models/components/sweepconfig.md) | :heavy_check_mark:                                               | N/A                                                              |