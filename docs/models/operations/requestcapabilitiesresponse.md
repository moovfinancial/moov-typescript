# RequestCapabilitiesResponse

## Example Usage

```typescript
import { RequestCapabilitiesResponse } from "@moovio/sdk/models/operations";

let value: RequestCapabilitiesResponse = {
  headers: {},
  result: [
    {
      capability: "send-funds.rtp",
      accountID: "ee65bd48-3de1-496e-83b6-fce65af07b9f",
      status: "enabled",
      createdOn: new Date("2025-03-30T16:43:22.332Z"),
      updatedOn: new Date("2026-01-22T20:20:02.903Z"),
    },
  ],
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `headers`                                                        | Record<string, *string*[]>                                       | :heavy_check_mark:                                               | N/A                                                              |
| `result`                                                         | [components.Capability](../../models/components/capability.md)[] | :heavy_check_mark:                                               | N/A                                                              |