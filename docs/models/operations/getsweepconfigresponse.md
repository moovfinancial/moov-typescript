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
    sweepConfigID: "169725e7-8760-4379-975c-bf0b04eca604",
    walletID: "670a70f3-2c59-4060-833f-4d6da01013cb",
    status: "enabled",
    pushPaymentMethod: {
      paymentMethodID: "d191f7e2-f00d-4c33-a7fa-dd29f17cf16c",
    },
    pullPaymentMethod: {
      paymentMethodID: "e189dd79-0b0a-48f2-96d8-d8ae0e2c95fd",
    },
    createdOn: new Date("2023-08-11T03:22:39.673Z"),
    updatedOn: new Date("2024-01-29T10:53:12.721Z"),
  },
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `headers`                                                        | Record<string, *string*[]>                                       | :heavy_check_mark:                                               | N/A                                                              |
| `result`                                                         | [components.SweepConfig](../../models/components/sweepconfig.md) | :heavy_check_mark:                                               | N/A                                                              |