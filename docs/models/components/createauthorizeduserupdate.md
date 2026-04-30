# CreateAuthorizedUserUpdate

Fields for identifying an authorized individual.

## Example Usage

```typescript
import { CreateAuthorizedUserUpdate } from "@moovio/sdk/models/components";

let value: CreateAuthorizedUserUpdate = {
  birthDate: {
    day: 9,
    month: 11,
    year: 1989,
  },
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `firstName`                                                              | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |
| `lastName`                                                               | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |
| `birthDate`                                                              | [components.BirthDateUpdate](../../models/components/birthdateupdate.md) | :heavy_minus_sign:                                                       | N/A                                                                      |