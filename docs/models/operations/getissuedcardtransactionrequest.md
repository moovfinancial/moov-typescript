# GetIssuedCardTransactionRequest

## Example Usage

```typescript
import { GetIssuedCardTransactionRequest } from "@moovio/sdk/models/operations";

let value: GetIssuedCardTransactionRequest = {
  accountID: "72551db6-b5e8-4175-805f-4b22407f4adf",
  cardTransactionID: "d15b50b8-76ae-4665-a3d3-8c0861d65a75",
};
```

## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `accountID`                                                 | *string*                                                    | :heavy_check_mark:                                          | The Moov business account for which cards have been issued. |
| `cardTransactionID`                                         | *string*                                                    | :heavy_check_mark:                                          | N/A                                                         |