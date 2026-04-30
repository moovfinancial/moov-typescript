# ListInstitutionsRequest

## Example Usage

```typescript
import { ListInstitutionsRequest } from "@moovio/sdk/models/operations";

let value: ListInstitutionsRequest = {};
```

## Fields

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `name`                                                                                    | *string*                                                                                  | :heavy_minus_sign:                                                                        | Name of the financial institution. Either `name` or `routingNumber` is required.          |
| `routingNumber`                                                                           | *string*                                                                                  | :heavy_minus_sign:                                                                        | Routing number for a financial institution. Either `routingNumber` or `name` is required. |
| `state`                                                                                   | *string*                                                                                  | :heavy_minus_sign:                                                                        | The state where a financial institution is based.                                         |
| `limit`                                                                                   | *number*                                                                                  | :heavy_minus_sign:                                                                        | Maximum results returned by a search.                                                     |