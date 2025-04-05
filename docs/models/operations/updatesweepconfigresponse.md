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
    sweepConfigID: "cd28469c-13b9-454f-bd1b-3d3ccc1914f0",
    walletID: "85cfd8d9-c88d-49c4-94df-3c9a54ac501c",
    status: "disabled",
    pushPaymentMethod: {
      paymentMethodID: "451f5045-0524-4e65-98e5-6ba4c5788add",
    },
    pullPaymentMethod: {
      paymentMethodID: "be427ce5-a504-4f4c-9f20-b487c4718764",
    },
    createdOn: new Date("2024-07-20T14:09:19.857Z"),
    updatedOn: new Date("2023-07-21T12:25:44.641Z"),
  },
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `headers`                                                        | Record<string, *string*[]>                                       | :heavy_check_mark:                                               | N/A                                                              |
| `result`                                                         | [components.SweepConfig](../../models/components/sweepconfig.md) | :heavy_check_mark:                                               | N/A                                                              |