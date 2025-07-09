# GetCapabilityResponse

## Example Usage

```typescript
import { GetCapabilityResponse } from "@moovio/sdk/models/operations";

let value: GetCapabilityResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
    ],
    "key1": [],
  },
  result: {
    capability: "card-issuing",
    accountID: "cf91373b-4450-49d6-802e-b37c50431d9a",
    status: "pending",
    createdOn: new Date("2023-02-13T14:15:44.555Z"),
    updatedOn: new Date("2025-10-24T10:45:22.483Z"),
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `headers`                                                      | Record<string, *string*[]>                                     | :heavy_check_mark:                                             | N/A                                                            |
| `result`                                                       | [components.Capability](../../models/components/capability.md) | :heavy_check_mark:                                             | N/A                                                            |