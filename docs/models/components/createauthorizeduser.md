# CreateAuthorizedUser

Fields for identifying an authorized individual.

## Example Usage

```typescript
import { CreateAuthorizedUser } from "@moovio/sdk/models/components";

let value: CreateAuthorizedUser = {
  firstName: "Cindy",
  lastName: "Hyatt",
  birthDate: {
    day: 9,
    month: 11,
    year: 1989,
  },
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `firstName`                                                  | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `lastName`                                                   | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `birthDate`                                                  | [components.BirthDate](../../models/components/birthdate.md) | :heavy_minus_sign:                                           | N/A                                                          |