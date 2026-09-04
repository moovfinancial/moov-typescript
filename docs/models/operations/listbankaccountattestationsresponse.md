# ListBankAccountAttestationsResponse

## Example Usage

```typescript
import { ListBankAccountAttestationsResponse } from "@moovio/sdk/models/operations";

let value: ListBankAccountAttestationsResponse = {
  headers: {
    "key": [],
    "key1": [
      "<value 1>",
      "<value 2>",
    ],
    "key2": [],
  },
  result: [],
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `headers`                                                                                              | Record<string, *string*[]>                                                                             | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `result`                                                                                               | [components.BankAccountAttestationSummary](../../models/components/bankaccountattestationsummary.md)[] | :heavy_check_mark:                                                                                     | N/A                                                                                                    |