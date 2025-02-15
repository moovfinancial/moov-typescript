# RequirementError

## Example Usage

```typescript
import { RequirementError } from "@moovio/sdk/models/components";

let value: RequirementError = {
  requirement: "business.phone",
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `requirement`                                                                      | [components.RequirementID](../../models/components/requirementid.md)               | :heavy_check_mark:                                                                 | The unique ID of what the requirement is asking to be filled out.                  |
| `errorCode`                                                                        | [components.RequirementErrorCode](../../models/components/requirementerrorcode.md) | :heavy_minus_sign:                                                                 | N/A                                                                                |