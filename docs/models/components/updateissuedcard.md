# UpdateIssuedCard

## Example Usage

```typescript
import { UpdateIssuedCard } from "@moovio/sdk/models/components";

let value: UpdateIssuedCard = {
  metadata: {
    "optional": "metadata",
  },
  billingAddress: {
    addressLine1: "123 Main Street",
    addressLine2: "Apt 302",
    city: "Boulder",
    stateOrProvince: "CO",
    postalCode: "80301",
    country: "US",
  },
};
```

## Fields

| Field                                                                                                                                                                           | Type                                                                                                                                                                            | Required                                                                                                                                                                        | Description                                                                                                                                                                     | Example                                                                                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `state`                                                                                                                                                                         | [components.UpdateIssuedCardState](../../models/components/updateissuedcardstate.md)                                                                                            | :heavy_minus_sign:                                                                                                                                                              | Updates the state of a Moov issued card.<br/>- `closed`: The card is permanently deactivated and cannot approve authorizations. A card can be closed by request or when it expires. |                                                                                                                                                                                 |
| `nickname`                                                                                                                                                                      | *string*                                                                                                                                                                        | :heavy_minus_sign:                                                                                                                                                              | N/A                                                                                                                                                                             |                                                                                                                                                                                 |
| `metadata`                                                                                                                                                                      | Record<string, *string*>                                                                                                                                                        | :heavy_minus_sign:                                                                                                                                                              | N/A                                                                                                                                                                             | {<br/>"optional": "metadata"<br/>}                                                                                                                                              |
| `billingAddress`                                                                                                                                                                | [components.BillingAddress](../../models/components/billingaddress.md)                                                                                                          | :heavy_minus_sign:                                                                                                                                                              | N/A                                                                                                                                                                             |                                                                                                                                                                                 |