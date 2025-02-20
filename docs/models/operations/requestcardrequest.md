# RequestCardRequest

## Example Usage

```typescript
import { RequestCardRequest } from "@moovio/sdk/models/operations";

let value: RequestCardRequest = {
  accountID: "b4a8a626-7a4a-43cb-9191-f5081abde45f",
  requestCard: {
    fundingWalletID: "6e277b6d-ae4c-41cd-96bf-2905289ffe9e",
    authorizedUser: {
      firstName: "Coleman",
      lastName: "Lemke",
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