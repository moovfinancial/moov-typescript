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

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               | Example                                                                                   |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `cvv`                                                                                     | [components.CardVerificationResult](../../models/components/cardverificationresult.md)    | :heavy_check_mark:                                                                        | N/A                                                                                       | match                                                                                     |
| `addressLine1`                                                                            | [components.CardVerificationResult](../../models/components/cardverificationresult.md)    | :heavy_check_mark:                                                                        | N/A                                                                                       | match                                                                                     |
| `postalCode`                                                                              | [components.CardVerificationResult](../../models/components/cardverificationresult.md)    | :heavy_check_mark:                                                                        | N/A                                                                                       | match                                                                                     |
| `accountName`                                                                             | [components.AccountNameVerification](../../models/components/accountnameverification.md)  | :heavy_check_mark:                                                                        | The results of submitting cardholder name to a card network for verification.             | {<br/>"firstName": "match",<br/>"lastName": "match",<br/>"middleName": "match",<br/>"fullName": "match"<br/>} |