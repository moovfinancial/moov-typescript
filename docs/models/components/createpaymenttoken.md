# CreatePaymentToken

Payment data to exchange for a single-use payment token.

## Example Usage

```typescript
import { CreatePaymentToken } from "@moovio/sdk/models/components";

let value: CreatePaymentToken = {
  card: {
    cardNumber: "5405-1532-2923-8651",
    cardCvv: "<value>",
    expiration: {
      month: "01",
      year: "21",
    },
    billingAddress: {
      addressLine1: "123 Main Street",
      addressLine2: "Apt 302",
      city: "Boulder",
      stateOrProvince: "CO",
      postalCode: "80301",
      country: "US",
    },
  },
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `card`                                                                                 | [components.CreatePaymentTokenCard](../../models/components/createpaymenttokencard.md) | :heavy_check_mark:                                                                     | Card data to tokenize.                                                                 |