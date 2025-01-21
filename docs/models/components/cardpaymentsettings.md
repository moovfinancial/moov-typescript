# CardPaymentSettings

User provided settings to manage card payments. This data is only allowed on a business account.

## Example Usage

```typescript
import { CardPaymentSettings } from "moov-sdk/models/components";

let value: CardPaymentSettings = {
  statementDescriptor: "Whole Body Fitness",
};
```

## Fields

| Field                                                                                                                          | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    | Example                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `statementDescriptor`                                                                                                          | *string*                                                                                                                       | :heavy_minus_sign:                                                                                                             | The description that shows up on credit card transactions. This will default to the accounts display name on account creation. | Whole Body Fitness                                                                                                             |