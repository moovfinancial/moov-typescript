# ListSweepsResponse

## Example Usage

```typescript
import { ListSweepsResponse } from "@moovio/sdk/models/operations";

let value: ListSweepsResponse = {
  headers: {
    "key": [
      "<value>",
    ],
  },
  result: [
    {
      sweepID: "85271c62-9c7a-4643-86f0-32d539bc42f6",
      status: "closed",
      accruedAmount: "<value>",
      currency: "USD",
      accrualStartedOn: new Date("2024-08-07T16:54:45.201Z"),
      subtotals: [
        {
          type: "issuing-auth-hold",
          count: 905683,
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