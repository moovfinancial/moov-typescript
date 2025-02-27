# GetIssuedCardRequest

## Example Usage

```typescript
import { GetIssuedCardRequest } from "@moovio/sdk/models/operations";

let value: GetIssuedCardRequest = {
  accountID: "b2b1eb1d-ab79-469c-a3e4-2a84ab418457",
  issuedCardID: "071d4602-05c9-4d2a-ab51-b87d74b4431c",
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `accountID`                                              | *string*                                                 | :heavy_check_mark:                                       | The Moov business account for which the card was issued. |
| `issuedCardID`                                           | *string*                                                 | :heavy_check_mark:                                       | N/A                                                      |