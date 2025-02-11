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
    sweepConfigID: "4c37ba8a-0431-43de-b877-ff310563edb7",
    walletID: "fe4d51bc-f741-4697-b25e-7876037975cb",
    status: "enabled",
    pushPaymentMethod: {
      paymentMethodID: "b04eca60-4767-40a7-90f3-2c5906033f4d",
    },
    pullPaymentMethod: {
      paymentMethodID: "da01013c-b36d-4191-bf7e-2f00dc337fad",
    },
    createdOn: new Date("2023-05-28T08:33:24.565Z"),
    updatedOn: new Date("2024-09-26T08:58:46.574Z"),
  },
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `headers`                                                        | Record<string, *string*[]>                                       | :heavy_check_mark:                                               | N/A                                                              |
| `result`                                                         | [components.SweepConfig](../../models/components/sweepconfig.md) | :heavy_check_mark:                                               | N/A                                                              |