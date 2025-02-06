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
    accountID: "3aa14032-3a01-4254-94cf-8f61647a7eeb",
    status: "enabled",
    createdOn: new Date("2024-03-11T03:02:50.967Z"),
    updatedOn: new Date("2025-02-11T00:34:41.133Z"),
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `headers`                                                      | Record<string, *string*[]>                                     | :heavy_check_mark:                                             | N/A                                                            |
| `result`                                                       | [components.Capability](../../models/components/capability.md) | :heavy_check_mark:                                             | N/A                                                            |