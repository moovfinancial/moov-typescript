# Capability

## Example Usage

```typescript
import { Capability } from "moov-sdk/models/components";

let value: Capability = {
  capability: "send-funds",
  accountID: "370c1849-fa06-488a-9426-f2e87e7b6ebb",
  status: "in-review",
  createdOn: new Date("2024-11-28T02:57:00.009Z"),
  updatedOn: new Date("2023-09-21T01:29:35.775Z"),
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