# RequestCardRequest

## Example Usage

```typescript
import { RequestCardRequest } from "moov-sdk/models/operations";

let value: RequestCardRequest = {
  accountID: "90c9a991-375c-4a4f-aade-3602987b46f9",
  requestCard: {
    fundingWalletID: "b767d5e0-4ee3-43c5-a334-d72551db6b5e",
    authorizedUser: {
      firstName: "Berry",
      lastName: "Hessel",
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