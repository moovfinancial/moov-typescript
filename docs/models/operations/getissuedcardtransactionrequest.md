# GetIssuedCardTransactionRequest

## Example Usage

```typescript
import { GetIssuedCardTransactionRequest } from "moov-sdk/models/operations";

let value: GetIssuedCardTransactionRequest = {
  accountID: "c0de2fbe-c13d-40ba-b794-9b62ff105f63",
  cardTransactionID: "3a1a246c-82ca-4011-b34a-addc91b4c529",
};
```

## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `xMoovVersion`                                              | [components.Versions](../../models/components/versions.md)  | :heavy_minus_sign:                                          | Specify an API version.                                     |
| `accountID`                                                 | *string*                                                    | :heavy_check_mark:                                          | The Moov business account for which cards have been issued. |
| `cardTransactionID`                                         | *string*                                                    | :heavy_check_mark:                                          | N/A                                                         |