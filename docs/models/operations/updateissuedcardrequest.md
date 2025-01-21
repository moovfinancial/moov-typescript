# UpdateIssuedCardRequest

## Example Usage

```typescript
import { UpdateIssuedCardRequest } from "moov-sdk/models/operations";

let value: UpdateIssuedCardRequest = {
  accountID: "428d75e2-7cee-4183-92d5-136a9e5641f1",
  issuedCardID: "9b486116-000c-4ee0-8a41-118422d07127",
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
| `xMoovVersion`                                                             | [components.Versions](../../models/components/versions.md)                 | :heavy_minus_sign:                                                         | Specify an API version.                                                    |
| `accountID`                                                                | *string*                                                                   | :heavy_check_mark:                                                         | The Moov business account for which the card was issued.                   |
| `issuedCardID`                                                             | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `updateIssuedCard`                                                         | [components.UpdateIssuedCard](../../models/components/updateissuedcard.md) | :heavy_check_mark:                                                         | N/A                                                                        |