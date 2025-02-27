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
    sweepConfigID: "ed7c5de8-7831-46ca-8d71-8063d276d879",
    walletID: "851c5400-45b5-4c95-9206-65c1138be428",
    status: "disabled",
    pushPaymentMethod: {
      paymentMethodID: "03c68da9-a119-45fd-ae29-0b0a3940a7b0",
    },
    pullPaymentMethod: {
      paymentMethodID: "02c3122d-9c4a-4e8d-a3f1-c318537fa4f4",
    },
    createdOn: new Date("2023-10-16T14:42:22.872Z"),
    updatedOn: new Date("2025-04-28T15:21:24.503Z"),
  },
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `headers`                                                        | Record<string, *string*[]>                                       | :heavy_check_mark:                                               | N/A                                                              |
| `result`                                                         | [components.SweepConfig](../../models/components/sweepconfig.md) | :heavy_check_mark:                                               | N/A                                                              |