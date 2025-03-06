# CreateReceiptsResponse

## Example Usage

```typescript
import { CreateReceiptsResponse } from "@moovio/sdk/models/operations";

let value: CreateReceiptsResponse = {
  headers: {
    "key": [
      "<value>",
    ],
  },
  result: {
    receiptID: "f21f04d4-2cb1-48e6-b3b3-e67b5f4f6cc9",
    createdBy: "992e2854-28d7-45e2-b7ce-e1832d5136a9",
    disabledOn: new Date("2009-11-10T23:00:00Z"),
    kind: "sale.customer.v1",
    email: "jordan.lee@classbooker.dev",
    sentFor: [
      {
        receiptID: "5641f179-b486-4116-8000-cee0a4111842",
        idempotencyKey: "d071273a-6caf-457a-8630-4d90c0f8eee6",
        sentOn: new Date("2009-11-10T23:00:00Z"),
      },
    ],
  },
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `headers`                                                                | Record<string, *string*[]>                                               | :heavy_check_mark:                                                       | N/A                                                                      |
| `result`                                                                 | [components.ReceiptResponse](../../models/components/receiptresponse.md) | :heavy_check_mark:                                                       | N/A                                                                      |