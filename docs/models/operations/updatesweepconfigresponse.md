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
    sweepConfigID: "284f03c6-8da9-4a11-a95f-de290b0a3940",
    walletID: "7b0802c3-122d-49c4-aae8-d3f1c318537f",
    status: "enabled",
    pushPaymentMethod: {
      paymentMethodID: "f4b4ca97-39d0-4be9-945b-501465c36dc3",
    },
    pullPaymentMethod: {
      paymentMethodID: "2185899f-3e00-41a8-a228-f2419e37eb8a",
    },
    createdOn: new Date("2025-03-09T09:53:49.933Z"),
    updatedOn: new Date("2024-06-15T12:50:16.289Z"),
  },
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `headers`                                                        | Record<string, *string*[]>                                       | :heavy_check_mark:                                               | N/A                                                              |
| `result`                                                         | [components.SweepConfig](../../models/components/sweepconfig.md) | :heavy_check_mark:                                               | N/A                                                              |