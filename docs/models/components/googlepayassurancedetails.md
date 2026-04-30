# GooglePayAssuranceDetails

3-D Secure assurance details from Google Pay.

## Example Usage

```typescript
import { GooglePayAssuranceDetails } from "@moovio/sdk/models/components";

let value: GooglePayAssuranceDetails = {};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `cardHolderAuthenticated`                                              | *boolean*                                                              | :heavy_minus_sign:                                                     | Whether the card is verified via 3-D Secure authentication.            |
| `accountVerified`                                                      | *boolean*                                                              | :heavy_minus_sign:                                                     | Whether the returned payment credential can be used for a transaction. |