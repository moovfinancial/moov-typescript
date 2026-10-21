# RequestCard

## Example Usage

```typescript
import { RequestCard } from "@moovio/sdk/models/components";

let value: RequestCard = {
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

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `authorizedUserAccountID`                                                                     | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |                                                                                               |
| `nickname`                                                                                    | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |                                                                                               |
| `metadata`                                                                                    | Record<string, *string*>                                                                      | :heavy_minus_sign:                                                                            | Free-form key-value pair list. Useful for storing information that is not captured elsewhere. | {<br/>"optional": "metadata"<br/>}                                                            |
| `billingAddress`                                                                              | [components.Address](../../models/components/address.md)                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |                                                                                               |
| `controls`                                                                                    | [components.IssuingControls](../../models/components/issuingcontrols.md)                      | :heavy_minus_sign:                                                                            | Mutable spend controls for the card.                                                          |                                                                                               |