# RequestCapabilitiesResponse

## Example Usage

```typescript
import { RequestCapabilitiesResponse } from "@moovio/sdk/models/operations";

let value: RequestCapabilitiesResponse = {
  headers: {
    "key": [
      "<value>",
    ],
  },
  result: [
    {
      capability: "wallet",
      accountID: "fbc256a4-45c9-4115-8cbb-c488bf4ca9cf",
      status: "enabled",
      createdOn: new Date("2025-04-08T21:22:45.615Z"),
      updatedOn: new Date("2023-04-02T20:02:51.889Z"),
    },
  ],
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `headers`                                                        | Record<string, *string*[]>                                       | :heavy_check_mark:                                               | N/A                                                              |
| `result`                                                         | [components.Capability](../../models/components/capability.md)[] | :heavy_check_mark:                                               | N/A                                                              |