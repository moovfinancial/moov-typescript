# ListInstitutionsResponse

## Example Usage

```typescript
import { ListInstitutionsResponse } from "@moovio/sdk/models/operations";

let value: ListInstitutionsResponse = {
  headers: {
    "key": [
      "<value 1>",
    ],
    "key1": [
      "<value 1>",
      "<value 2>",
    ],
    "key2": [
      "<value 1>",
    ],
  },
  result: {
    achParticipants: [],
  },
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `headers`                                                                            | Record<string, *string*[]>                                                           | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `result`                                                                             | [components.FinancialInstitutions](../../models/components/financialinstitutions.md) | :heavy_check_mark:                                                                   | N/A                                                                                  |