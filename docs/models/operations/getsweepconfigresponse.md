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
    sweepConfigID: "d41cf2a0-0cd5-47cd-a4c3-7ba8a04313de",
    walletID: "77ff3105-63ed-4b7e-8fe4-d51bcf741697",
    status: "enabled",
    pushPaymentMethod: {
      paymentMethodID: "e7876037-975c-4bf0-8b04-eca6047670a7",
    },
    pullPaymentMethod: {
      paymentMethodID: "f32c5906-033f-44d6-bda0-1013cb36d191",
    },
    createdOn: new Date("2024-04-29T01:03:37.412Z"),
    updatedOn: new Date("2025-09-30T03:17:45.166Z"),
  },
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `headers`                                                        | Record<string, *string*[]>                                       | :heavy_check_mark:                                               | N/A                                                              |
| `result`                                                         | [components.SweepConfig](../../models/components/sweepconfig.md) | :heavy_check_mark:                                               | N/A                                                              |