# RequestCardRequest

## Example Usage

```typescript
import { RequestCardRequest } from "@moovio/sdk/models/operations";

let value: RequestCardRequest = {
  accountID: "c8d4e682-010c-4c69-b2d9-5db653275042",
  requestCard: {
    fundingWalletID: "722d887b-8114-4f18-9e13-90e1039f7878",
    authorizedUser: {
      firstName: "Maudie",
      lastName: "Lebsack",
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