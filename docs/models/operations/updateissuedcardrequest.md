# UpdateIssuedCardRequest

## Example Usage

```typescript
import { UpdateIssuedCardRequest } from "@moovio/sdk/models/operations";

let value: UpdateIssuedCardRequest = {
  accountID: "6bf77843-7849-4cb2-ba06-7cebce745654",
  issuedCardID: "facba22e-0acb-42a1-97a5-8f42e77f4c8b",
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