# GetIssuedCardTransactionRequest

## Example Usage

```typescript
import { GetIssuedCardTransactionRequest } from "@moovio/sdk/models/operations";

let value: GetIssuedCardTransactionRequest = {
  accountID: "0d30a20e-2850-4557-8bf8-f8929446a940",
  cardTransactionID: "7e9e975f-75ec-4997-81a6-0b2c49927df0",
};
```

## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `xMoovVersion`                                              | [components.Versions](../../models/components/versions.md)  | :heavy_minus_sign:                                          | Specify an API version.                                     |
| `accountID`                                                 | *string*                                                    | :heavy_check_mark:                                          | The Moov business account for which cards have been issued. |
| `cardTransactionID`                                         | *string*                                                    | :heavy_check_mark:                                          | N/A                                                         |