# ListIssuedCardAuthorizationsRequest

## Example Usage

```typescript
import { ListIssuedCardAuthorizationsRequest } from "@moovio/sdk/models/operations";

let value: ListIssuedCardAuthorizationsRequest = {
  accountID: "8c7030fa-003c-468d-8e6c-32faae04b7f7",
  skip: 60,
  count: 20,
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      | Example                                                                                          |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `accountID`                                                                                      | *string*                                                                                         | :heavy_check_mark:                                                                               | The Moov business account for which cards have been issued.                                      |                                                                                                  |
| `skip`                                                                                           | *number*                                                                                         | :heavy_minus_sign:                                                                               | N/A                                                                                              | 60                                                                                               |
| `count`                                                                                          | *number*                                                                                         | :heavy_minus_sign:                                                                               | N/A                                                                                              | 20                                                                                               |
| `issuedCardID`                                                                                   | *string*                                                                                         | :heavy_minus_sign:                                                                               | Optional ID of the issued card to filter results.                                                |                                                                                                  |
| `startDateTime`                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)    | :heavy_minus_sign:                                                                               | Optional date-time which inclusively filters all authorizations created after this date-time.    |                                                                                                  |
| `endDateTime`                                                                                    | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)    | :heavy_minus_sign:                                                                               | Optional date-time which exclusively filters all authorizations created before this date-time.   |                                                                                                  |
| `statuses`                                                                                       | [components.IssuingAuthorizationStatus](../../models/components/issuingauthorizationstatus.md)[] | :heavy_minus_sign:                                                                               | Optional, comma-separated statuses of the authorization to filter results.                       |                                                                                                  |