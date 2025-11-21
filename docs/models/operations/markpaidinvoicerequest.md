# MarkPaidInvoiceRequest

## Example Usage

```typescript
import { MarkPaidInvoiceRequest } from "@moovio/sdk/models/operations";

let value: MarkPaidInvoiceRequest = {
  accountID: "55adb198-4ccc-48ee-9be3-beaa2e7a8146",
  invoiceID: "ae1048cf-9e14-40de-8eef-855cdd9adf7e",
  markInvoicePaid: {},
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `accountID`                                                              | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `invoiceID`                                                              | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `markInvoicePaid`                                                        | [components.MarkInvoicePaid](../../models/components/markinvoicepaid.md) | :heavy_check_mark:                                                       | N/A                                                                      |