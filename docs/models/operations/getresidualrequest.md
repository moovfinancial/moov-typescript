# GetResidualRequest

## Example Usage

```typescript
import { GetResidualRequest } from "@moovio/sdk/models/operations";

let value: GetResidualRequest = {
  accountID: "<id>",
  residualID: "<id>",
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `accountID`                                              | *string*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `residualID`                                             | *string*                                                 | :heavy_check_mark:                                       | Unique identifier for this residual payment calculation. |