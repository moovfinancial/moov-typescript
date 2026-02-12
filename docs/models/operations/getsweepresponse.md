# GetSweepResponse

## Example Usage

```typescript
import { GetSweepResponse } from "@moovio/sdk/models/operations";

let value: GetSweepResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
    ],
    "key1": [
      "<value 1>",
      "<value 2>",
    ],
    "key2": [],
  },
  result: {
    sweepID: "<id>",
    status: "closed",
    accruedAmount: "<value>",
    currency: "USD",
    accrualStartedOn: new Date("2026-08-09T15:26:11.381Z"),
    subtotals: [
      {
        type: "moov-fee",
        count: 782798,
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