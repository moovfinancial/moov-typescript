# CreateReceiptsResponse

## Example Usage

```typescript
import { CreateReceiptsResponse } from "@moovio/sdk/models/operations";

let value: CreateReceiptsResponse = {
  headers: {},
  result: [
    {
      receiptID: "4925c8a5-3b9a-4488-a514-9fd992546aca",
      createdBy: "25a02396-1048-48f9-bf93-102d2fb7895e",
      kind: "sale.customer.v1",
      email: "jordan.lee@classbooker.dev",
      forTransferID: "193ceb53-94c7-41c4-9272-c90c2832cb4c",
      sentFor: [
        {
          receiptID: "4925c8a5-3b9a-4488-a514-9fd992546aca",
          idempotencyKey: "0c14c6a6-6f50-4d1e-b0c4-b46ff43ba6a1",
          sentOn: new Date("2025-01-16T17:52:14.219311143Z"),
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