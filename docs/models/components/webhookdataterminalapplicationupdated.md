# WebhookDataTerminalApplicationUpdated

## Example Usage

```typescript
import { WebhookDataTerminalApplicationUpdated } from "@moovio/sdk/models/components";

let value: WebhookDataTerminalApplicationUpdated = {
  terminalApplicationID: "9ed01e9a-932f-43e9-bfad-e6b29c3949f5",
  status: "enabled",
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  | Example                                                                                      |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `terminalApplicationID`                                                                      | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |                                                                                              |
| `status`                                                                                     | [components.TerminalApplicationStatus](../../models/components/terminalapplicationstatus.md) | :heavy_check_mark:                                                                           | Status of the terminal application.                                                          | enabled                                                                                      |