# GetCapabilityResponse

## Example Usage

```typescript
import { GetCapabilityResponse } from "@moovio/sdk/models/operations";

let value: GetCapabilityResponse = {
  headers: {
    "key": [
      "<value>",
    ],
  },
  result: {
    capability: "collect-funds",
    accountID: "accf9137-3b44-4509-ad60-2eb37c50431d",
    status: "pending",
    createdOn: new Date("2023-06-21T09:14:52.689Z"),
    updatedOn: new Date("2025-02-19T11:44:12.719Z"),
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `headers`                                                      | Record<string, *string*[]>                                     | :heavy_check_mark:                                             | N/A                                                            |
| `result`                                                       | [components.Capability](../../models/components/capability.md) | :heavy_check_mark:                                             | N/A                                                            |