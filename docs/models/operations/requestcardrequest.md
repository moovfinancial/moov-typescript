# RequestCardRequest

## Example Usage

```typescript
import { RequestCardRequest } from "@moovio/sdk/models/operations";

let value: RequestCardRequest = {
  accountID: "65327504-2c72-42d8-b87b-8114f18e1390",
  requestCard: {
    fundingWalletID: "1039f787-84bb-48da-a7d9-1cd0cfc6b4a8",
    authorizedUser: {
      firstName: "Harrison",
      lastName: "Jones",
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