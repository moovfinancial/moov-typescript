# PatchAccountRequest

## Example Usage

```typescript
import { PatchAccountRequest } from "@moovio/sdk/models/operations";

let value: PatchAccountRequest = {
  accountID: "39de68c4-9272-4766-a324-3bb91910539e",
  createAccountUpdate: {
    accountType: "business",
    profile: {
      business: {
        legalBusinessName: "Whole Body Fitness LLC",
      },
    },
  },
};
```

## Fields

| Field                                                                                                       | Type                                                                                                        | Required                                                                                                    | Description                                                                                                 | Example                                                                                                     |
| ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| `xMoovVersion`                                                                                              | [components.Versions](../../models/components/versions.md)                                                  | :heavy_minus_sign:                                                                                          | Specify an API version.                                                                                     |                                                                                                             |
| `accountID`                                                                                                 | *string*                                                                                                    | :heavy_check_mark:                                                                                          | N/A                                                                                                         |                                                                                                             |
| `createAccountUpdate`                                                                                       | [components.CreateAccountUpdate](../../models/components/createaccountupdate.md)                            | :heavy_check_mark:                                                                                          | N/A                                                                                                         | {<br/>"accountType": "business",<br/>"profile": {<br/>"business": {<br/>"legalBusinessName": "Whole Body Fitness LLC"<br/>}<br/>}<br/>} |