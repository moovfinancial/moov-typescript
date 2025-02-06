# ListCapabilitiesResponse

## Example Usage

```typescript
import { ListCapabilitiesResponse } from "@moovio/sdk/models/operations";

let value: ListCapabilitiesResponse = {
  headers: {
    "key": [
      "<value>",
    ],
  },
  result: [
    {
      capability: "wallet",
      accountID: "c4c87a01-4f25-4055-afd6-0da2f1d46caf",
      status: "enabled",
      createdOn: new Date("2025-08-27T06:12:53.981Z"),
      updatedOn: new Date("2025-04-22T23:52:00.946Z"),
    },
  ],
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `headers`                                                        | Record<string, *string*[]>                                       | :heavy_check_mark:                                               | N/A                                                              |
| `result`                                                         | [components.Capability](../../models/components/capability.md)[] | :heavy_check_mark:                                               | N/A                                                              |