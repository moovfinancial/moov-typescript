# UpdateIssuedCard

## Example Usage

```typescript
import { UpdateIssuedCard } from "@moovio/sdk/models/components";

let value: UpdateIssuedCard = {
  authorizedUser: {
    birthDate: {
      day: 9,
      month: 11,
      year: 1989,
    },
  },
};
```

## Fields

| Field                                                                                                                                                                           | Type                                                                                                                                                                            | Required                                                                                                                                                                        | Description                                                                                                                                                                     |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `state`                                                                                                                                                                         | [components.UpdateIssuedCardState](../../models/components/updateissuedcardstate.md)                                                                                            | :heavy_minus_sign:                                                                                                                                                              | Updates the state of a Moov issued card.<br/>- `closed`: The card is permanently deactivated and cannot approve authorizations. A card can be closed by request or when it expires. |
| `memo`                                                                                                                                                                          | *string*                                                                                                                                                                        | :heavy_minus_sign:                                                                                                                                                              | N/A                                                                                                                                                                             |
| `authorizedUser`                                                                                                                                                                | [components.CreateAuthorizedUserUpdate](../../models/components/createauthorizeduserupdate.md)                                                                                  | :heavy_minus_sign:                                                                                                                                                              | Fields for identifying an authorized individual.                                                                                                                                |