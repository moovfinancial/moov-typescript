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
    sweepConfigID: "cad71806-3d27-46d8-b793-851c540045b5",
    walletID: "9520665c-1138-4be4-a284-f03c68da9a11",
    status: "enabled",
    pushPaymentMethod: {
      paymentMethodID: "fde290b0-a394-40a7-bb08-02c3122d9c4a",
    },
    pullPaymentMethod: {
      paymentMethodID: "8d3f1c31-8537-4fa4-9f4b-4ca9739d0be9",
    },
    createdOn: new Date("2024-01-21T05:11:59.869Z"),
    updatedOn: new Date("2025-03-31T16:33:43.233Z"),
  },
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `headers`                                                        | Record<string, *string*[]>                                       | :heavy_check_mark:                                               | N/A                                                              |
| `result`                                                         | [components.SweepConfig](../../models/components/sweepconfig.md) | :heavy_check_mark:                                               | N/A                                                              |