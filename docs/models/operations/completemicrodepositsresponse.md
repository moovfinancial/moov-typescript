# CompleteMicroDepositsResponse

## Example Usage

```typescript
import { CompleteMicroDepositsResponse } from "@moovio/sdk/models/operations";

let value: CompleteMicroDepositsResponse = {
  headers: {
    "key": [
      "<value>",
    ],
  },
  result: {
    status: "verified",
  },
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `headers`                                                                              | Record<string, *string*[]>                                                             | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `result`                                                                               | [components.CompletedMicroDeposits](../../models/components/completedmicrodeposits.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |