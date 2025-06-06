# SearchInstitutionsRequest

## Example Usage

```typescript
import { SearchInstitutionsRequest } from "@moovio/sdk/models/operations";

let value: SearchInstitutionsRequest = {};
```

## Fields

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `name`                                                                                    | *string*                                                                                  | :heavy_minus_sign:                                                                        | Name of the financial institution. Either `name` or `routingNumber` is required.          |
| `routingNumber`                                                                           | *string*                                                                                  | :heavy_minus_sign:                                                                        | Routing number for a financial institution. Either `routingNumber` or `name` is required. |
| `limit`                                                                                   | *number*                                                                                  | :heavy_minus_sign:                                                                        | Maximum results returned by a search.                                                     |