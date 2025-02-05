# GetIssuedCardRequest

## Example Usage

```typescript
import { GetIssuedCardRequest } from "@moovio/sdk/models/operations";

let value: GetIssuedCardRequest = {
  accountID: "89ffe9e5-388e-40d9-9fb5-a5e088364acc",
  issuedCardID: "3489cb2b-1eb1-4dab-8796-9c3e42a84ab4",
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `accountID`                                              | *string*                                                 | :heavy_check_mark:                                       | The Moov business account for which the card was issued. |
| `issuedCardID`                                           | *string*                                                 | :heavy_check_mark:                                       | N/A                                                      |