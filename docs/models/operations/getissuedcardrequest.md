# GetIssuedCardRequest

## Example Usage

```typescript
import { GetIssuedCardRequest } from "@moovio/sdk/models/operations";

let value: GetIssuedCardRequest = {
  accountID: "a84ab418-457b-4071-ad46-0205c9d2ab51",
  issuedCardID: "87d74b44-31cb-46bf-9778-437849cb2a06",
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `accountID`                                              | *string*                                                 | :heavy_check_mark:                                       | The Moov business account for which the card was issued. |
| `issuedCardID`                                           | *string*                                                 | :heavy_check_mark:                                       | N/A                                                      |