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
      receiptID: "52d93d70-261a-4390-9251-f3eafee9f27c",
      createdBy: "fb3ce8f8-c53c-4345-8955-77057379dc42",
      disabledOn: new Date("2009-11-10T23:00:00Z"),
      kind: "sale.customer.v1",
      email: "jordan.lee@classbooker.dev",
      sentFor: [
        {
          receiptID: "6d248980-ce42-4cbc-9e08-c8890e30a82f",
          idempotencyKey: "41822b1b-161f-4353-b8e7-b541f6d9a757",
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