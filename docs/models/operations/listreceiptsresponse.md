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
      receiptID: "95577057-379d-4c42-b06d-248980ce42cb",
      createdBy: "e08c8890-e30a-482f-8641-822b1b161f35",
      disabledOn: new Date("2009-11-10T23:00:00Z"),
      kind: "sale.customer.v1",
      email: "jordan.lee@classbooker.dev",
      sentFor: [
        {
          receiptID: "8e7b541f-6d9a-4757-9ce7-8bfad62b3e17",
          idempotencyKey: "dff0fa46-ee12-4065-ba2c-91edc793cbcf",
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