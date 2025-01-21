# RequestCardRequest

## Example Usage

```typescript
import { RequestCardRequest } from "moov-sdk/models/operations";

let value: RequestCardRequest = {
  accountID: "244c276c-7317-43a3-a8ae-ea30c51d8f9f",
  requestCard: {
    fundingWalletID: "2f12fcd7-6400-453a-92ef-7024eef42856",
    authorizedUser: {
      firstName: "Angelica",
      lastName: "Roberts",
      birthDate: {
        day: 9,
        month: 11,
        year: 1989,
      },
    },
    formFactor: "virtual",
    expiration: {
      month: "01",
      year: "21",
    },
    controls: {
      velocityLimits: [
        {
          amount: 10000,
          interval: "per-transaction",
        },
      ],
    },
  },
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `xMoovVersion`                                                   | [components.Versions](../../models/components/versions.md)       | :heavy_minus_sign:                                               | Specify an API version.                                          |
| `accountID`                                                      | *string*                                                         | :heavy_check_mark:                                               | The Moov business account for which the card is to be issued.    |
| `requestCard`                                                    | [components.RequestCard](../../models/components/requestcard.md) | :heavy_check_mark:                                               | N/A                                                              |