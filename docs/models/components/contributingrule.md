# ContributingRule

A risk rule that contributed to a transfer's risk decision.

## Example Usage

```typescript
import { ContributingRule } from "@moovio/sdk/models/components";

let value: ContributingRule = {
  name: "<value>",
};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `name`                                             | *string*                                           | :heavy_check_mark:                                 | Human-readable name of the contributing risk rule. |