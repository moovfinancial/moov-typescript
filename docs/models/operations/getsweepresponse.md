# GetSweepResponse

## Example Usage

```typescript
import { GetSweepResponse } from "@moovio/sdk/models/operations";

let value: GetSweepResponse = {
  headers: {
    "key": [
      "<value 1>",
    ],
    "key1": [],
  },
  result: {
    sweepID: "8dda803f-fcd9-4154-ab19-4bb163fe021e",
    status: "failed",
    accruedAmount: "<value>",
    currency: "USD",
    accrualStartedOn: new Date("2024-11-16T14:11:40.669Z"),
    subtotals: [
      {
        type: "ach-reversal",
        count: 901665,
        amount: {
          currency: "USD",
          valueDecimal: "12.987654321",
        },
      },
    ],
  },
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `headers`                                            | Record<string, *string*[]>                           | :heavy_check_mark:                                   | N/A                                                  |
| `result`                                             | [components.Sweep](../../models/components/sweep.md) | :heavy_check_mark:                                   | N/A                                                  |