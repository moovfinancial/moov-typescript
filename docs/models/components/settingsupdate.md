# SettingsUpdate

User provided settings to manage an account.

## Example Usage

```typescript
import { SettingsUpdate } from "@moovio/sdk/models/components";

let value: SettingsUpdate = {
  cardPayment: {
    statementDescriptor: "Whole Body Fitness",
  },
  achPayment: {
    companyName: "WholeBodyFitness",
  },
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `cardPayment`                                                                                    | [components.CardPaymentSettings](../../models/components/cardpaymentsettings.md)                 | :heavy_minus_sign:                                                                               | User provided settings to manage card payments. This data is only allowed on a business account. |
| `achPayment`                                                                                     | [components.ACHPaymentSettingsUpdate](../../models/components/achpaymentsettingsupdate.md)       | :heavy_minus_sign:                                                                               | N/A                                                                                              |