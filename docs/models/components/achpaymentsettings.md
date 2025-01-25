# ACHPaymentSettings

## Example Usage

```typescript
import { ACHPaymentSettings } from "@moovio/sdk/models/components";

let value: ACHPaymentSettings = {
  companyName: "WholeBodyFitness",
};
```

## Fields

| Field                                                                                                                   | Type                                                                                                                    | Required                                                                                                                | Description                                                                                                             | Example                                                                                                                 |
| ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `companyName`                                                                                                           | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | The description that shows up on ACH transactions. This will default to the account's display name on account creation. | WholeBodyFitness                                                                                                        |