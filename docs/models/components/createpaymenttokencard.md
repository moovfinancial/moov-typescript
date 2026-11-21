# CreatePaymentTokenCard

Card data to tokenize.

## Example Usage

```typescript
import { CreatePaymentTokenCard } from "@moovio/sdk/models/components";

let value: CreatePaymentTokenCard = {
  cardNumber: "3529-8664-7940-3925",
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
};
```

## Fields

| Field                                                                                                                                                | Type                                                                                                                                                 | Required                                                                                                                                             | Description                                                                                                                                          | Example                                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| `cardNumber`                                                                                                                                         | *string*                                                                                                                                             | :heavy_check_mark:                                                                                                                                   | The full card number (PAN).                                                                                                                          |                                                                                                                                                      |
| `cardCvv`                                                                                                                                            | *string*                                                                                                                                             | :heavy_check_mark:                                                                                                                                   | The card's 3- or 4-digit card verification value.                                                                                                    |                                                                                                                                                      |
| `expiration`                                                                                                                                         | [components.CardExpiration](../../models/components/cardexpiration.md)                                                                               | :heavy_check_mark:                                                                                                                                   | The expiration date of the card or token.                                                                                                            | {<br/>"month": "01",<br/>"year": "21"<br/>}                                                                                                          |
| `holderName`                                                                                                                                         | *string*                                                                                                                                             | :heavy_minus_sign:                                                                                                                                   | The name of the cardholder as it appears on the card.                                                                                                |                                                                                                                                                      |
| `billingAddress`                                                                                                                                     | [components.CardAddress](../../models/components/cardaddress.md)                                                                                     | :heavy_check_mark:                                                                                                                                   | The billing address associated with the card.                                                                                                        | {<br/>"addressLine1": "123 Main Street",<br/>"addressLine2": "Apt 302",<br/>"city": "Boulder",<br/>"stateOrProvince": "CO",<br/>"postalCode": "80301",<br/>"country": "US"<br/>} |