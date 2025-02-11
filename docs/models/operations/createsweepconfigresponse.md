# CreateSweepConfigResponse

## Example Usage

```typescript
import { CreateSweepConfigResponse } from "@moovio/sdk/models/operations";

let value: CreateSweepConfigResponse = {
  headers: {
    "key": [
      "<value>",
    ],
  },
  result: {
    sweepConfigID: "de42c916-5a6a-4cb9-be38-c33ace7b25a2",
    walletID: "2c5b6be9-2f83-46be-9e2d-967cda0c0678",
    status: "enabled",
    pushPaymentMethod: {
      paymentMethodID: "c4d02e70-9715-49ae-9711-62e3685a9fd9",
    },
    pullPaymentMethod: {
      paymentMethodID: "99428460-a0b3-429f-96d0-8a6206bf7451",
    },
    createdOn: new Date("2024-11-18T07:59:28.683Z"),
    updatedOn: new Date("2024-11-14T10:34:48.905Z"),
  },
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `headers`                                                        | Record<string, *string*[]>                                       | :heavy_check_mark:                                               | N/A                                                              |
| `result`                                                         | [components.SweepConfig](../../models/components/sweepconfig.md) | :heavy_check_mark:                                               | N/A                                                              |