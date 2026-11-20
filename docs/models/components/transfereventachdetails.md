# TransferEventACHDetails

## Example Usage

```typescript
import { TransferEventACHDetails } from "@moovio/sdk/models/components";

let value: TransferEventACHDetails = {
  status: "",
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `status`                                                                           | [components.ACHTransactionStatus](../../models/components/achtransactionstatus.md) | :heavy_check_mark:                                                                 | Status of a transaction within the ACH lifecycle.                                  |
| `return`                                                                           | [components.ACHException](../../models/components/achexception.md)                 | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `correction`                                                                       | [components.ACHException](../../models/components/achexception.md)                 | :heavy_minus_sign:                                                                 | N/A                                                                                |