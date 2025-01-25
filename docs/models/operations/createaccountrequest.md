# CreateAccountRequest

## Example Usage

```typescript
import { CreateAccountRequest } from "@moovio/sdk/models/operations";

let value: CreateAccountRequest = {
  createAccount: {
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

| Field                                                                                                                       | Type                                                                                                                        | Required                                                                                                                    | Description                                                                                                                 | Example                                                                                                                     |
| --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| `xMoovVersion`                                                                                                              | [components.Versions](../../models/components/versions.md)                                                                  | :heavy_minus_sign:                                                                                                          | Specify an API version.                                                                                                     |                                                                                                                             |
| `xWaitFor`                                                                                                                  | [components.AccountWaitFor](../../models/components/accountwaitfor.md)                                                      | :heavy_minus_sign:                                                                                                          | Optional header that indicates whether to wait for the connection to be created before returning from the account creation. |                                                                                                                             |
| `createAccount`                                                                                                             | [components.CreateAccount](../../models/components/createaccount.md)                                                        | :heavy_check_mark:                                                                                                          | N/A                                                                                                                         | {<br/>"accountType": "business",<br/>"profile": {<br/>"business": {<br/>"legalBusinessName": "Whole Body Fitness LLC"<br/>}<br/>}<br/>} |