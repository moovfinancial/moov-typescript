# ACHPaymentSettingsUpdate

## Example Usage

```typescript
import { ACHPaymentSettingsUpdate } from "@moovio/sdk/models/components";

let value: ACHPaymentSettingsUpdate = {
  companyName: "WholeBodyFitness",
};
```

## Fields

| Field                                                                                                                   | Type                                                                                                                    | Required                                                                                                                | Description                                                                                                             | Example                                                                                                                 |
| ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `companyName`                                                                                                           | *string*                                                                                                                | :heavy_minus_sign:                                                                                                      | The description that shows up on ACH transactions. This will default to the account's display name on account creation. | WholeBodyFitness                                                                                                        |