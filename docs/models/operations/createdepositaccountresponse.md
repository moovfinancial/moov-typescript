# CreateDepositAccountResponse

## Example Usage

```typescript
import { CreateDepositAccountResponse } from "@moovio/sdk/models/operations";

let value: CreateDepositAccountResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
  },
  result: {
    moovAccountID: "<id>",
    sourceSystem: "jh_cif2020",
    sourceAccountID: "<id>",
    ingestedAt: new Date("2026-05-07T12:15:50.011Z"),
  },
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `headers`                                                                                              | Record<string, *string*[]>                                                                             | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `result`                                                                                               | [components.DepositAccountIngestedResponse](../../models/components/depositaccountingestedresponse.md) | :heavy_check_mark:                                                                                     | N/A                                                                                                    |