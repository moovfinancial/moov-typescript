# GetSweepResponse

## Example Usage

```typescript
import { GetSweepResponse } from "@moovio/sdk/models/operations";

let value: GetSweepResponse = {
  headers: {
    "key": [
      "<value>",
    ],
  },
  result: {
    sweepID: "a39a8c03-f714-409f-8995-38e0969d7362",
    status: "canceled",
    accruedAmount: "<value>",
    currency: "USD",
    accrualStartedOn: new Date("2024-11-16T18:22:28.736Z"),
  },
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `headers`                                            | Record<string, *string*[]>                           | :heavy_check_mark:                                   | N/A                                                  |
| `result`                                             | [components.Sweep](../../models/components/sweep.md) | :heavy_check_mark:                                   | N/A                                                  |