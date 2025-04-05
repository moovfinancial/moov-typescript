# ListSweepConfigsResponse

## Example Usage

```typescript
import { ListSweepConfigsResponse } from "@moovio/sdk/models/operations";

let value: ListSweepConfigsResponse = {
  headers: {
    "key": [
      "<value>",
    ],
  },
  result: [
    {
      sweepConfigID: "c3be66de-bb51-42a0-94ac-bc0ce420d621",
      walletID: "c24f65b1-7980-448b-a95e-2a3dd0e85314",
      status: "disabled",
      pushPaymentMethod: {
        paymentMethodID: "72bb44ee-f22d-46d7-8278-1b3798d70f6f",
      },
      pullPaymentMethod: {
        paymentMethodID: "776913f2-9073-4d94-b3f7-780828ec1753",
      },
      createdOn: new Date("2024-05-27T11:51:21.176Z"),
      updatedOn: new Date("2024-11-10T15:02:14.317Z"),
    },
  ],
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `headers`                                                          | Record<string, *string*[]>                                         | :heavy_check_mark:                                                 | N/A                                                                |
| `result`                                                           | [components.SweepConfig](../../models/components/sweepconfig.md)[] | :heavy_check_mark:                                                 | N/A                                                                |