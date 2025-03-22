# GetIssuedCardTransactionRequest

## Example Usage

```typescript
import { GetIssuedCardTransactionRequest } from "@moovio/sdk/models/operations";

let value: GetIssuedCardTransactionRequest = {
  accountID: "722d887b-8114-4f18-9e13-90e1039f7878",
  cardTransactionID: "bb8da7d9-1cd0-4cfc-a6b4-a8a6267a4a3c",
};
```

## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `accountID`                                                 | *string*                                                    | :heavy_check_mark:                                          | The Moov business account for which cards have been issued. |
| `cardTransactionID`                                         | *string*                                                    | :heavy_check_mark:                                          | N/A                                                         |