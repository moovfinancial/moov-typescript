# InstitutionsSearchResponse

## Example Usage

```typescript
import { InstitutionsSearchResponse } from "@moovio/sdk/models/components";

let value: InstitutionsSearchResponse = {
  ach: [],
  rtp: [],
  wire: [],
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `ach`                                                                      | [components.ACHInstitution](../../models/components/achinstitution.md)[]   | :heavy_check_mark:                                                         | N/A                                                                        |
| `rtp`                                                                      | [components.RTPInstitution](../../models/components/rtpinstitution.md)[]   | :heavy_check_mark:                                                         | N/A                                                                        |
| `wire`                                                                     | [components.WireInstitution](../../models/components/wireinstitution.md)[] | :heavy_check_mark:                                                         | N/A                                                                        |