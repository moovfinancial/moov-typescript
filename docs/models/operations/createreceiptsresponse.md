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
    receiptID: "c9c992e2-8542-48d7-95e2-7cee1832d513",
    createdBy: "a9e5641f-179b-4486-a116-000cee0a4111",
    disabledOn: new Date("2009-11-10T23:00:00Z"),
    kind: "sale.customer.v1",
    email: "jordan.lee@classbooker.dev",
    sentFor: [
      {
        receiptID: "422d0712-73a6-4caf-b57a-6304d90c0f8e",
        idempotencyKey: "e6252d93-d702-461a-8390-251f3eafee9f",
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