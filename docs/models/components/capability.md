# Capability

## Example Usage

```typescript
import { Capability } from "@moovio/sdk/models/components";

let value: Capability = {
  capability: "transfers",
  accountID: "6320b0c2-11a3-468d-bb42-0447ab462c0b",
  status: "in-review",
  createdOn: new Date("2023-10-12T07:51:04.077Z"),
  updatedOn: new Date("2024-02-14T16:46:50.809Z"),
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