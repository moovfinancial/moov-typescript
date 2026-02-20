# ListInvoicePaymentsResponse

## Example Usage

```typescript
import { ListInvoicePaymentsResponse } from "@moovio/sdk/models/operations";

let value: ListInvoicePaymentsResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
    ],
  },
  result: [],
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `headers`                                                                | Record<string, *string*[]>                                               | :heavy_check_mark:                                                       | N/A                                                                      |
| `result`                                                                 | [components.InvoicePayment](../../models/components/invoicepayment.md)[] | :heavy_check_mark:                                                       | N/A                                                                      |