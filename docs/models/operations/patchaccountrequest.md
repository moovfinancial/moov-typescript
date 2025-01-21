# PatchAccountRequest

## Example Usage

```typescript
import { PatchAccountRequest } from "moov-sdk/models/operations";

let value: PatchAccountRequest = {
  accountID: "55b35ce9-18a5-4dc9-b2be-4fc4941da926",
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