# WireTransferProcessingDetails

Wire-specific processing details returned on a transfer.

## Example Usage

```typescript
import { WireTransferProcessingDetails } from "@moovio/sdk/models/components";

let value: WireTransferProcessingDetails = {
  status: "failed",
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `status`                                                                             | [components.WireTransactionStatus](../../models/components/wiretransactionstatus.md) | :heavy_check_mark:                                                                   | Status of a transaction within the wire lifecycle.                                   |
| `networkResponseCode`                                                                | *string*                                                                             | :heavy_minus_sign:                                                                   | Response code returned by the network on failure.                                    |
| `failureCode`                                                                        | [components.WireFailureCode](../../models/components/wirefailurecode.md)             | :heavy_minus_sign:                                                                   | Status codes for wire failures.                                                      |