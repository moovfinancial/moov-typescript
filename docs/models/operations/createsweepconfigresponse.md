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
    sweepConfigID: "77a08e66-7d9b-4b0f-8b90-e7e69e7266bd",
    walletID: "742ad83c-8cf6-454b-9f47-9f3f8bc2ffdd",
    status: "disabled",
    pushPaymentMethod: {
      paymentMethodID: "e42c9165-a6ac-4b9e-838c-33ace7b25a2f",
    },
    pullPaymentMethod: {
      paymentMethodID: "c5b6be92-f836-4bee-92d9-67cda0c06784",
    },
    createdOn: new Date("2025-05-12T21:05:52.127Z"),
    updatedOn: new Date("2023-10-25T07:23:29.621Z"),
  },
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `headers`                                                        | Record<string, *string*[]>                                       | :heavy_check_mark:                                               | N/A                                                              |
| `result`                                                         | [components.SweepConfig](../../models/components/sweepconfig.md) | :heavy_check_mark:                                               | N/A                                                              |