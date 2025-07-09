# ListSweepsResponse

## Example Usage

```typescript
import { ListSweepsResponse } from "@moovio/sdk/models/operations";

let value: ListSweepsResponse = {
  headers: {},
  result: [
    {
      sweepID: "629c7a64-36f0-432d-b539-bc42f61888e0",
      status: "canceled",
      accruedAmount: "<value>",
      currency: "USD",
      accrualStartedOn: new Date("2025-01-25T08:43:52.998Z"),
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
  ],
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `headers`                                              | Record<string, *string*[]>                             | :heavy_check_mark:                                     | N/A                                                    |
| `result`                                               | [components.Sweep](../../models/components/sweep.md)[] | :heavy_check_mark:                                     | N/A                                                    |