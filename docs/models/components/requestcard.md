# RequestCard

## Example Usage

```typescript
import { RequestCard } from "@moovio/sdk/models/components";

let value: RequestCard = {
  fundingWalletID: "c5adc9e4-6cca-429f-a410-90eeea081101",
  authorizedUser: {
    firstName: "Kenton",
    lastName: "Sawayn",
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
};
```

## Fields

| Field                                                                                                                               | Type                                                                                                                                | Required                                                                                                                            | Description                                                                                                                         | Example                                                                                                                             |
| ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| `fundingWalletID`                                                                                                                   | *string*                                                                                                                            | :heavy_check_mark:                                                                                                                  | N/A                                                                                                                                 |                                                                                                                                     |
| `authorizedUser`                                                                                                                    | [components.CreateAuthorizedUser](../../models/components/createauthorizeduser.md)                                                  | :heavy_check_mark:                                                                                                                  | Fields for identifying an authorized individual.                                                                                    |                                                                                                                                     |
| `formFactor`                                                                                                                        | [components.IssuedCardFormFactor](../../models/components/issuedcardformfactor.md)                                                  | :heavy_check_mark:                                                                                                                  | Specifies the type of spend card to be issued. Presently supports virtual only, providing a digital number without a physical card. |                                                                                                                                     |
| `memo`                                                                                                                              | *string*                                                                                                                            | :heavy_minus_sign:                                                                                                                  | An optional descriptive name for the card.                                                                                          |                                                                                                                                     |
| `expiration`                                                                                                                        | [components.CardExpiration](../../models/components/cardexpiration.md)                                                              | :heavy_minus_sign:                                                                                                                  | The expiration date of the card or token.                                                                                           | {<br/>"month": "01",<br/>"year": "21"<br/>}                                                                                         |
| `controls`                                                                                                                          | [components.IssuingControls](../../models/components/issuingcontrols.md)                                                            | :heavy_minus_sign:                                                                                                                  | N/A                                                                                                                                 |                                                                                                                                     |