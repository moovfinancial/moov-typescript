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
    sweepID: "9dad22e5-3efa-46b0-b25d-4063065b165a",
    status: "accruing",
    accruedAmount: "<value>",
    currency: "USD",
    accrualStartedOn: new Date("2025-06-13T14:44:19.237Z"),
  },
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `headers`                                            | Record<string, *string*[]>                           | :heavy_check_mark:                                   | N/A                                                  |
| `result`                                             | [components.Sweep](../../models/components/sweep.md) | :heavy_check_mark:                                   | N/A                                                  |