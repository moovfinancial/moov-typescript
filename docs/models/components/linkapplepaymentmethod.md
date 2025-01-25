# LinkApplePaymentMethod

  Provides information about the underlying card.

  Refer to [Apple's documentation](https://developer.apple.com/documentation/apple_pay_on_the_web/applepaypaymenttoken/1916113-paymentmethod) 
  for more information.

## Example Usage

```typescript
import { LinkApplePaymentMethod } from "@moovio/sdk/models/components";

let value: LinkApplePaymentMethod = {
  displayName: "Visa 1234",
  network: "Visa",
  type: "debit",
};
```

## Fields

| Field                                       | Type                                        | Required                                    | Description                                 | Example                                     |
| ------------------------------------------- | ------------------------------------------- | ------------------------------------------- | ------------------------------------------- | ------------------------------------------- |
| `displayName`                               | *string*                                    | :heavy_check_mark:                          | A display-friendly discription of the card. | Visa 1234                                   |
| `network`                                   | *string*                                    | :heavy_check_mark:                          | The card's payment network.                 | Visa                                        |
| `type`                                      | *string*                                    | :heavy_check_mark:                          | The type of card.                           | debit                                       |