# GetFullIssuedCardRequest

## Example Usage

```typescript
import { GetFullIssuedCardRequest } from "@moovio/sdk/models/operations";

let value: GetFullIssuedCardRequest = {
  accountID: "f75fbb61-f1a0-400f-b792-7827e92feec8",
  issuedCardID: "90118bfe-991c-44e3-bb17-2d9f2db60b1c",
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `accountID`                                              | *string*                                                 | :heavy_check_mark:                                       | The Moov business account for which the card was issued. |
| `issuedCardID`                                           | *string*                                                 | :heavy_check_mark:                                       | N/A                                                      |