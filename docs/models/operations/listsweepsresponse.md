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
      sweepID: "b9612b75-56a9-4121-80cd-6fdd5fb5e098",
      status: "paid",
      accruedAmount: "<value>",
      currency: "USD",
      accrualStartedOn: new Date("2023-11-05T18:07:49.990Z"),
    },
  ],
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `headers`                                              | Record<string, *string*[]>                             | :heavy_check_mark:                                     | N/A                                                    |
| `result`                                               | [components.Sweep](../../models/components/sweep.md)[] | :heavy_check_mark:                                     | N/A                                                    |