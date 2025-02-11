# GetIssuedCardRequest

## Example Usage

```typescript
import { GetIssuedCardRequest } from "@moovio/sdk/models/operations";

let value: GetIssuedCardRequest = {
  accountID: "4ab41845-7b07-41d4-9602-05c9d2ab51b8",
  issuedCardID: "d74b4431-cb6b-4f77-b843-7849cb2a067c",
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `accountID`                                              | *string*                                                 | :heavy_check_mark:                                       | The Moov business account for which the card was issued. |
| `issuedCardID`                                           | *string*                                                 | :heavy_check_mark:                                       | N/A                                                      |