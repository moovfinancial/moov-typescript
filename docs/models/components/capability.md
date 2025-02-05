# Capability

## Example Usage

```typescript
import { Capability } from "@moovio/sdk/models/components";

let value: Capability = {
  capability: "card-issuing",
  accountID: "ee6252d9-3d70-4261-ba39-0251f3eafee9",
  status: "enabled",
  createdOn: new Date("2024-05-12T19:04:22.335Z"),
  updatedOn: new Date("2025-05-06T02:45:05.659Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `capability`                                                                                  | [components.CapabilityID](../../models/components/capabilityid.md)                            | :heavy_check_mark:                                                                            | Moov account capabilities.                                                                    |
| `accountID`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `status`                                                                                      | [components.CapabilityStatus](../../models/components/capabilitystatus.md)                    | :heavy_check_mark:                                                                            | The status of the capability requested for an account.                                        |
| `requirements`                                                                                | [components.CapabilityRequirement](../../models/components/capabilityrequirement.md)[]        | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `disabledReason`                                                                              | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `createdOn`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `updatedOn`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `disabledOn`                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |