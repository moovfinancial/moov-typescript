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
    sweepConfigID: "4e9bce46-ed67-4b05-b38c-2f7c57fb034f",
    walletID: "a1c22d01-e4ca-41c3-bb68-f44459ce0a99",
    status: "disabled",
    pushPaymentMethod: {
      paymentMethodID: "b2fd41cf-2a00-4cd5-87cd-4c37ba8a0431",
    },
    pullPaymentMethod: {
      paymentMethodID: "de877ff3-1056-43ed-9b7e-fe4d51bcf741",
    },
    createdOn: new Date("2024-09-24T20:40:57.193Z"),
    updatedOn: new Date("2024-06-28T03:53:07.992Z"),
  },
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `headers`                                                        | Record<string, *string*[]>                                       | :heavy_check_mark:                                               | N/A                                                              |
| `result`                                                         | [components.SweepConfig](../../models/components/sweepconfig.md) | :heavy_check_mark:                                               | N/A                                                              |