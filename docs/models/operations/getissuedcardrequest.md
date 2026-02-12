# GetIssuedCardRequest

## Example Usage

```typescript
import { GetIssuedCardRequest } from "@moovio/sdk/models/operations";

let value: GetIssuedCardRequest = {
  accountID: "<id>",
  issuedCardID: "<id>",
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `accountID`                                              | *string*                                                 | :heavy_check_mark:                                       | The Moov business account for which the card was issued. |
| `issuedCardID`                                           | *string*                                                 | :heavy_check_mark:                                       | N/A                                                      |