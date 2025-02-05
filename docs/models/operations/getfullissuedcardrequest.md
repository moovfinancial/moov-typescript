# GetFullIssuedCardRequest

## Example Usage

```typescript
import { GetFullIssuedCardRequest } from "@moovio/sdk/models/operations";

let value: GetFullIssuedCardRequest = {
  accountID: "62fb7700-c0cb-4a85-afe7-230d578c9167",
  issuedCardID: "c090d353-d4b9-4d38-ad90-4a9eec25f75f",
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `accountID`                                              | *string*                                                 | :heavy_check_mark:                                       | The Moov business account for which the card was issued. |
| `issuedCardID`                                           | *string*                                                 | :heavy_check_mark:                                       | N/A                                                      |