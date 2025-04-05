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
    sweepID: "798dda80-3ffc-4d91-854b-194bb163fe02",
    status: "paid",
    accruedAmount: "<value>",
    currency: "USD",
    accrualStartedOn: new Date("2025-03-04T14:31:52.903Z"),
  },
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `headers`                                            | Record<string, *string*[]>                           | :heavy_check_mark:                                   | N/A                                                  |
| `result`                                             | [components.Sweep](../../models/components/sweep.md) | :heavy_check_mark:                                   | N/A                                                  |