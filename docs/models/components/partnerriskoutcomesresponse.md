# PartnerRiskOutcomesResponse

The risk rules that contributed to a transfer's risk decision.

This information has limited availability and must be enabled for your account by Moov.

## Example Usage

```typescript
import { PartnerRiskOutcomesResponse } from "@moovio/sdk/models/components";

let value: PartnerRiskOutcomesResponse = {
  transferID: "d09a94b6-cb1f-4d3f-a34a-a0f56b7b8b2a",
  contributingRules: [
    {
      name: "Velocity",
    },
    {
      name: "Device",
    },
  ],
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `transferID`                                                                               | *string*                                                                                   | :heavy_check_mark:                                                                         | Identifier of the transfer these outcomes belong to.                                       |
| `contributingRules`                                                                        | [components.ContributingRule](../../models/components/contributingrule.md)[]               | :heavy_check_mark:                                                                         | The risk rules that contributed to the decision. May be empty when no rules are disclosed. |