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
      sweepID: "fdd5fb5e-0981-4d46-97d9-9547457ded8b",
      status: "canceled",
      accruedAmount: "<value>",
      currency: "USD",
      accrualStartedOn: new Date("2025-10-27T18:38:23.714Z"),
    },
  ],
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `headers`                                              | Record<string, *string*[]>                             | :heavy_check_mark:                                     | N/A                                                    |
| `result`                                               | [components.Sweep](../../models/components/sweep.md)[] | :heavy_check_mark:                                     | N/A                                                    |