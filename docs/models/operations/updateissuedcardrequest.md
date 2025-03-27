# UpdateIssuedCardRequest

## Example Usage

```typescript
import { UpdateIssuedCardRequest } from "@moovio/sdk/models/operations";

let value: UpdateIssuedCardRequest = {
  accountID: "b0a24e0d-80cd-47ce-89e6-ccb6734a5b95",
  issuedCardID: "55a0da04-2995-4c0d-ae2f-bec13d0ba794",
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