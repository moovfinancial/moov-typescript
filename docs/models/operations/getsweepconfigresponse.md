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
    sweepConfigID: "4f1206ec-142b-461c-9866-27e19fa7a4f0",
    walletID: "60861967-1bce-49c1-a40f-0bd0055177a9",
    status: "disabled",
    pushPaymentMethod: {
      paymentMethodID: "1b0ac084-2eef-43f0-a754-ed2f672dff10",
    },
    pullPaymentMethod: {
      paymentMethodID: "d540448d-3b92-427f-8379-5a3367b0e71e",
    },
    createdOn: new Date("2023-03-15T22:11:17.936Z"),
    updatedOn: new Date("2023-07-08T03:02:59.489Z"),
  },
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `headers`                                                        | Record<string, *string*[]>                                       | :heavy_check_mark:                                               | N/A                                                              |
| `result`                                                         | [components.SweepConfig](../../models/components/sweepconfig.md) | :heavy_check_mark:                                               | N/A                                                              |