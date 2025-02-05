# CapabilityRequirement

Represents individual and business data necessary to facilitate the enabling of a capability for an account.

## Example Usage

```typescript
import { CapabilityRequirement } from "@moovio/sdk/models/components";

let value: CapabilityRequirement = {
  currentlyDue: [
    "business.average-monthly-transaction-volume",
  ],
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `currentlyDue`                                                               | [components.RequirementID](../../models/components/requirementid.md)[]       | :heavy_check_mark:                                                           | N/A                                                                          |
| `errors`                                                                     | [components.RequirementError](../../models/components/requirementerror.md)[] | :heavy_minus_sign:                                                           | N/A                                                                          |