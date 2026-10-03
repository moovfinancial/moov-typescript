# TransferEventWireCreditDetails

## Example Usage

```typescript
import { TransferEventWireCreditDetails } from "@moovio/sdk/models/components";

let value: TransferEventWireCreditDetails = {
  status: "completed",
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `status`                                                                             | [components.WireTransactionStatus](../../models/components/wiretransactionstatus.md) | :heavy_check_mark:                                                                   | Status of a transaction within the wire lifecycle.                                   |
| `failureCode`                                                                        | [components.WireFailureCode](../../models/components/wirefailurecode.md)             | :heavy_minus_sign:                                                                   | Status codes for wire failures.                                                      |