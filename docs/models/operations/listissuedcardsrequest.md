# ListIssuedCardsRequest

## Example Usage

```typescript
import { ListIssuedCardsRequest } from "@moovio/sdk/models/operations";

let value: ListIssuedCardsRequest = {
  accountID: "8b762fb7-700c-40cb-8a85-fe7230d578c9",
  skip: 60,
  count: 20,
};
```

## Fields

| Field                                                                                                                     | Type                                                                                                                      | Required                                                                                                                  | Description                                                                                                               | Example                                                                                                                   |
| ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| `accountID`                                                                                                               | *string*                                                                                                                  | :heavy_check_mark:                                                                                                        | The Moov business account for which the cards have been issued.                                                           |                                                                                                                           |
| `skip`                                                                                                                    | *number*                                                                                                                  | :heavy_minus_sign:                                                                                                        | N/A                                                                                                                       | 60                                                                                                                        |
| `count`                                                                                                                   | *number*                                                                                                                  | :heavy_minus_sign:                                                                                                        | N/A                                                                                                                       | 20                                                                                                                        |
| `states`                                                                                                                  | [components.IssuedCardState](../../models/components/issuedcardstate.md)[]                                                | :heavy_minus_sign:                                                                                                        | Optional, comma-separated states to filter the Moov list issued cards response. For example `active,pending-verification` |                                                                                                                           |