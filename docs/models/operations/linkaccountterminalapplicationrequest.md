# LinkAccountTerminalApplicationRequest

## Example Usage

```typescript
import { LinkAccountTerminalApplicationRequest } from "@moovio/sdk/models/operations";

let value: LinkAccountTerminalApplicationRequest = {
  accountID: "76d4c8a0-1f2b-4e3b-8f5c-7a9e1b2c3d4e",
  linkAccountTerminalApplication: {
    terminalApplicationID: "12345678-1234-1234-1234-123456789012",
  },
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            | Example                                                                                                |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `accountID`                                                                                            | *string*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    | 76d4c8a0-1f2b-4e3b-8f5c-7a9e1b2c3d4e                                                                   |
| `linkAccountTerminalApplication`                                                                       | [components.LinkAccountTerminalApplication](../../models/components/linkaccountterminalapplication.md) | :heavy_check_mark:                                                                                     | N/A                                                                                                    |                                                                                                        |