# CardVerification

The results of submitting cardholder data to a card network for verification.

## Example Usage

```typescript
import { CardVerification } from "@moovio/sdk/models/components";

let value: CardVerification = {
  cvv: "match",
  addressLine1: "match",
  postalCode: "match",
  accountName: {
    firstName: "match",
    lastName: "match",
    middleName: "match",
    fullName: "match",
  },
};
```

## Fields

| Field                                                                                                                                                                          | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `cvv`                                                                                                                                                                          | [components.CardVerificationResult](../../models/components/cardverificationresult.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | Verification result of the card's CVV.                                                                                                                                         | match                                                                                                                                                                          |
| `addressLine1`                                                                                                                                                                 | [components.CardVerificationResult](../../models/components/cardverificationresult.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | Verification result of the billing address line 1.<br/>Derived from the same AVS code as `postalCode`; the card network returns a single code covering both address fields.    | match                                                                                                                                                                          |
| `postalCode`                                                                                                                                                                   | [components.CardVerificationResult](../../models/components/cardverificationresult.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | Verification result of the billing address postal code.<br/>Derived from the same AVS code as `addressLine1`; the card network returns a single code covering both address fields. | match                                                                                                                                                                          |
| `accountName`                                                                                                                                                                  | [components.AccountNameVerification](../../models/components/accountnameverification.md)                                                                                       | :heavy_minus_sign:                                                                                                                                                             | Verification results of the cardholder's name, broken down by name component.                                                                                                  | {<br/>"firstName": "match",<br/>"lastName": "match",<br/>"middleName": "match",<br/>"fullName": "match"<br/>}                                                                  |