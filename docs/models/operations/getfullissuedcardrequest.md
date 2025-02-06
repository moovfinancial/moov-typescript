# GetFullIssuedCardRequest

## Example Usage

```typescript
import { GetFullIssuedCardRequest } from "@moovio/sdk/models/operations";

let value: GetFullIssuedCardRequest = {
  accountID: "f7927827-e92f-4eec-b8c9-0118bfe991c4",
  issuedCardID: "3b172d9f-2db6-40b1-9cc3-fc9b71a6f12e",
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `accountID`                                              | *string*                                                 | :heavy_check_mark:                                       | The Moov business account for which the card was issued. |
| `issuedCardID`                                           | *string*                                                 | :heavy_check_mark:                                       | N/A                                                      |