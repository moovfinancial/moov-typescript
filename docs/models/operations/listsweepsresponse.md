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
      sweepID: "05b9612b-7556-4a91-a210-cd6fdd5fb5e0",
      status: "closed",
      accruedAmount: "<value>",
      currency: "USD",
      accrualStartedOn: new Date("2023-03-31T15:24:09.344Z"),
    },
  ],
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `headers`                                              | Record<string, *string*[]>                             | :heavy_check_mark:                                     | N/A                                                    |
| `result`                                               | [components.Sweep](../../models/components/sweep.md)[] | :heavy_check_mark:                                     | N/A                                                    |