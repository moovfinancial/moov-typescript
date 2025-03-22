# UpdateIssuedCardRequest

## Example Usage

```typescript
import { UpdateIssuedCardRequest } from "@moovio/sdk/models/operations";

let value: UpdateIssuedCardRequest = {
  accountID: "91616037-921d-419c-92ab-b0a24e0d80cd",
  issuedCardID: "ce9e6ccb-6734-4a5b-b952-55a0da042995",
  updateIssuedCard: {
    authorizedUser: {
      birthDate: {
        day: 9,
        month: 11,
        year: 1989,
      },
    },
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `accountID`                                                                | *string*                                                                   | :heavy_check_mark:                                                         | The Moov business account for which the card was issued.                   |
| `issuedCardID`                                                             | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `updateIssuedCard`                                                         | [components.UpdateIssuedCard](../../models/components/updateissuedcard.md) | :heavy_check_mark:                                                         | N/A                                                                        |