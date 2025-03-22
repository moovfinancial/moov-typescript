# ListReceiptsResponse

## Example Usage

```typescript
import { ListReceiptsResponse } from "@moovio/sdk/models/operations";

let value: ListReceiptsResponse = {
  headers: {
    "key": [
      "<value>",
    ],
  },
  result: [
    {
      receiptID: "7c7fb3ce-8f8c-453c-b345-95577057379d",
      createdBy: "4206d248-980c-4e42-acbc-e08c8890e30a",
      disabledOn: new Date("2009-11-10T23:00:00Z"),
      kind: "sale.customer.v1",
      email: "jordan.lee@classbooker.dev",
      sentFor: [
        {
          receiptID: "2f641822-b1b1-461f-9353-8e7b541f6d9a",
          idempotencyKey: "57ce78bf-ad62-4b3e-8176-dff0fa46ee12",
          sentOn: new Date("2009-11-10T23:00:00Z"),
        },
      ],
    },
  ],
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `headers`                                                                  | Record<string, *string*[]>                                                 | :heavy_check_mark:                                                         | N/A                                                                        |
| `result`                                                                   | [components.ReceiptResponse](../../models/components/receiptresponse.md)[] | :heavy_check_mark:                                                         | N/A                                                                        |