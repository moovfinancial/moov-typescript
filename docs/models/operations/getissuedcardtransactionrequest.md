# GetIssuedCardTransactionRequest

## Example Usage

```typescript
import { GetIssuedCardTransactionRequest } from "@moovio/sdk/models/operations";

let value: GetIssuedCardTransactionRequest = {
  accountID: "2e76835b-9ccc-42a7-a0d3-0a20e2850557",
  cardTransactionID: "f8f89294-46a9-4403-87e9-e975f75ec997",
};
```

## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `accountID`                                                 | *string*                                                    | :heavy_check_mark:                                          | The Moov business account for which cards have been issued. |
| `cardTransactionID`                                         | *string*                                                    | :heavy_check_mark:                                          | N/A                                                         |