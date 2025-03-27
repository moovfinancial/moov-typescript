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
    receiptID: "7cee1832-d513-46a9-9e56-41f179b48611",
    createdBy: "000cee0a-4111-4842-a2d0-71273a6caf57",
    disabledOn: new Date("2009-11-10T23:00:00Z"),
    kind: "sale.customer.v1",
    email: "jordan.lee@classbooker.dev",
    sentFor: [
      {
        receiptID: "6304d90c-0f8e-4ee6-8252-d93d70261a39",
        idempotencyKey: "251f3eaf-ee9f-427c-97fb-3ce8f8c53c34",
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