# GetFullIssuedCardRequest

## Example Usage

```typescript
import { GetFullIssuedCardRequest } from "@moovio/sdk/models/operations";

let value: GetFullIssuedCardRequest = {
  accountID: "b62ff105-f63f-43a1-aa24-6c82ca01134a",
  issuedCardID: "ddc91b4c-529e-4244-bc27-6c73173a38ae",
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `accountID`                                              | *string*                                                 | :heavy_check_mark:                                       | The Moov business account for which the card was issued. |
| `issuedCardID`                                           | *string*                                                 | :heavy_check_mark:                                       | N/A                                                      |