# UpdateIssuedCardRequest

## Example Usage

```typescript
import { UpdateIssuedCardRequest } from "@moovio/sdk/models/operations";

let value: UpdateIssuedCardRequest = {
  accountID: "f1a000f7-9278-427e-b92f-eec8c90118bf",
  issuedCardID: "991c4e3b-172d-49f2-adb6-0b1cc3fc9b71",
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