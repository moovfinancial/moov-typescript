# GetSweepConfigResponse

## Example Usage

```typescript
import { GetSweepConfigResponse } from "@moovio/sdk/models/operations";

let value: GetSweepConfigResponse = {
  headers: {},
  result: {
    sweepConfigID: "ae43eef7-c163-4347-acf8-c2243c3431be",
    walletID: "87597fc8-e61f-46e3-9c18-6c6ea20dd43e",
    status: "enabled",
    pushPaymentMethod: {
      paymentMethodID: "cb74fdaf-14de-43d7-95e6-270c9422550b",
    },
    pullPaymentMethod: {
      paymentMethodID: "6e6facf0-2f8e-47c2-b493-c9e1a43668ba",
    },
    createdOn: new Date("2025-04-06T13:54:31.686Z"),
    updatedOn: new Date("2025-06-30T05:26:49.123Z"),
  },
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `headers`                                                        | Record<string, *string*[]>                                       | :heavy_check_mark:                                               | N/A                                                              |
| `result`                                                         | [components.SweepConfig](../../models/components/sweepconfig.md) | :heavy_check_mark:                                               | N/A                                                              |