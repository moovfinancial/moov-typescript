# InstantBankCreditTransferProcessingDetails

## Example Usage

```typescript
import { InstantBankCreditTransferProcessingDetails } from "@moovio/sdk/models/components";

let value: InstantBankCreditTransferProcessingDetails = {
  network: "rtp",
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `network`                                                                              | [components.InstantBankNetwork](../../models/components/instantbanknetwork.md)         | :heavy_check_mark:                                                                     | The network that the transaction was processed on.                                     |
| `networkResponseCode`                                                                  | *string*                                                                               | :heavy_minus_sign:                                                                     | N/A                                                                                    |
| `failureCode`                                                                          | [components.InstantBankFailureCode](../../models/components/instantbankfailurecode.md) | :heavy_minus_sign:                                                                     | Status codes for instant-bank failures.                                                |
| `endToEndID`                                                                           | *string*                                                                               | :heavy_minus_sign:                                                                     | N/A                                                                                    |