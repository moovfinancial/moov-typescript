# ACHDebitTransferProcessingDetails

## Example Usage

```typescript
import { ACHDebitTransferProcessingDetails } from "@moovio/sdk/models/components";

let value: ACHDebitTransferProcessingDetails = {
  status: "returned",
  traceNumber: "124782618117",
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        | Example                                                                            |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `status`                                                                           | [components.ACHTransactionStatus](../../models/components/achtransactionstatus.md) | :heavy_check_mark:                                                                 | Status of a transaction within the ACH lifecycle.                                  |                                                                                    |
| `traceNumber`                                                                      | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                | 124782618117                                                                       |
| `return`                                                                           | [components.ACHException](../../models/components/achexception.md)                 | :heavy_minus_sign:                                                                 | N/A                                                                                |                                                                                    |
| `correction`                                                                       | [components.ACHException](../../models/components/achexception.md)                 | :heavy_minus_sign:                                                                 | N/A                                                                                |                                                                                    |