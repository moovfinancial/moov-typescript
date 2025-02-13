# GetIssuedCardTransactionRequest

## Example Usage

```typescript
import { GetIssuedCardTransactionRequest } from "@moovio/sdk/models/operations";

let value: GetIssuedCardTransactionRequest = {
  accountID: "fade3602-987b-446f-b9ab-767d5e04ee33",
  cardTransactionID: "5334d725-51db-46b5-be81-7505f4b22407",
};
```

## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `accountID`                                                 | *string*                                                    | :heavy_check_mark:                                          | The Moov business account for which cards have been issued. |
| `cardTransactionID`                                         | *string*                                                    | :heavy_check_mark:                                          | N/A                                                         |