# IndividualName

## Example Usage

```typescript
import { IndividualName } from "moov-sdk/models/components";

let value: IndividualName = {
  firstName: "Jordan",
  middleName: "Reese",
  lastName: "Lee",
  suffix: "Jr",
};
```

## Fields

| Field                                       | Type                                        | Required                                    | Description                                 | Example                                     |
| ------------------------------------------- | ------------------------------------------- | ------------------------------------------- | ------------------------------------------- | ------------------------------------------- |
| `firstName`                                 | *string*                                    | :heavy_check_mark:                          | The individual's first given name.          | Jordan                                      |
| `middleName`                                | *string*                                    | :heavy_minus_sign:                          | The individual's second given name, if any. | Reese                                       |
| `lastName`                                  | *string*                                    | :heavy_check_mark:                          | The individual's family name.               | Lee                                         |
| `suffix`                                    | *string*                                    | :heavy_minus_sign:                          | Suffix of a given name.                     | Jr                                          |