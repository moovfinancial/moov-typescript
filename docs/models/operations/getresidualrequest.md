# GetResidualRequest

## Example Usage

```typescript
import { GetResidualRequest } from "@moovio/sdk/models/operations";

let value: GetResidualRequest = {
  accountID: "a431a840-9b2f-4d33-a0c0-c06b47f088ef",
  residualID: "c034e587-370a-475e-b133-d5a21f51869e",
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `accountID`                                              | *string*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `residualID`                                             | *string*                                                 | :heavy_check_mark:                                       | Unique identifier for this residual payment calculation. |