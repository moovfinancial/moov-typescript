# RTPTransactionDetails

RTP specific details about the transaction.

## Example Usage

```typescript
import { RTPTransactionDetails } from "@moovio/sdk/models/components";

let value: RTPTransactionDetails = {};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `status`                                                                                      | [components.RTPTransactionStatus](../../models/components/rtptransactionstatus.md)            | :heavy_minus_sign:                                                                            | Status of a transaction within the RTP lifecycle.                                             |
| `networkResponseCode`                                                                         | *string*                                                                                      | :heavy_minus_sign:                                                                            | Response code returned by network on failure.                                                 |
| `failureCode`                                                                                 | [components.RTPFailureCode](../../models/components/rtpfailurecode.md)                        | :heavy_minus_sign:                                                                            | Status codes for RTP failures.                                                                |
| `initiatedOn`                                                                                 | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `completedOn`                                                                                 | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `failedOn`                                                                                    | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `acceptedWithoutPostingOn`                                                                    | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |