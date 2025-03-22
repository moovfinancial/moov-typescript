# RequestCardRequest

## Example Usage

```typescript
import { RequestCardRequest } from "@moovio/sdk/models/operations";

let value: RequestCardRequest = {
  accountID: "84ab4184-57b0-471d-a460-205c9d2ab51b",
  requestCard: {
    fundingWalletID: "7d74b443-1cb6-4bf7-b784-37849cb2a067",
    authorizedUser: {
      firstName: "Shanelle",
      lastName: "Ryan",
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
| `accountID`                                                      | *string*                                                         | :heavy_check_mark:                                               | The Moov business account for which the card is to be issued.    |
| `requestCard`                                                    | [components.RequestCard](../../models/components/requestcard.md) | :heavy_check_mark:                                               | N/A                                                              |