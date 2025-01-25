# ACHPaymentDetails

Options for payment links used to collect an ACH payment.

## Example Usage

```typescript
import { ACHPaymentDetails } from "@moovio/sdk/models/components";

let value: ACHPaymentDetails = {
  companyEntryDescription: "Gym dues",
  originatingCompanyName: "Whole Body Fit",
};
```

## Fields

| Field                                                                               | Type                                                                                | Required                                                                            | Description                                                                         | Example                                                                             |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `companyEntryDescription`                                                           | *string*                                                                            | :heavy_minus_sign:                                                                  | An optional override of the default NACHA company entry description for a transfer. | Gym dues                                                                            |
| `originatingCompanyName`                                                            | *string*                                                                            | :heavy_minus_sign:                                                                  | An optional override of the default NACHA company name for a transfer.              | Whole Body Fit                                                                      |