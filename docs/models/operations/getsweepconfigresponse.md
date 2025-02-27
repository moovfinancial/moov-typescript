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
    sweepConfigID: "2fd41cf2-a00c-4d57-bcd4-c37ba8a04313",
    walletID: "e877ff31-0563-4edb-a7ef-e4d51bcf7416",
    status: "enabled",
    pushPaymentMethod: {
      paymentMethodID: "25e78760-3797-45cb-af0b-04eca6047670",
    },
    pullPaymentMethod: {
      paymentMethodID: "70f32c59-0603-43f4-ad6d-a01013cb36d1",
    },
    createdOn: new Date("2023-05-07T01:41:53.430Z"),
    updatedOn: new Date("2025-12-25T11:36:55.890Z"),
  },
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `headers`                                                        | Record<string, *string*[]>                                       | :heavy_check_mark:                                               | N/A                                                              |
| `result`                                                         | [components.SweepConfig](../../models/components/sweepconfig.md) | :heavy_check_mark:                                               | N/A                                                              |