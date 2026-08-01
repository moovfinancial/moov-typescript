# ACHCreditOptions

## Example Usage

```typescript
import { ACHCreditOptions } from "@moovio/sdk/models/components";

let value: ACHCreditOptions = {
  companyEntryDescription: "Gym dues",
  originatingCompanyName: "Whole Body Fit",
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  | Example                                                                                      |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `companyEntryDescription`                                                                    | *string*                                                                                     | :heavy_minus_sign:                                                                           | An optional override of the default NACHA company entry description for a transfer.          | Gym dues                                                                                     |
| `originatingCompanyName`                                                                     | *string*                                                                                     | :heavy_minus_sign:                                                                           | An optional override of the default NACHA company name for a transfer.                       | Whole Body Fit                                                                               |
| `addenda`                                                                                    | [components.TransferACHAddendaRecord](../../models/components/transferachaddendarecord.md)[] | :heavy_minus_sign:                                                                           | N/A                                                                                          |                                                                                              |