# WebhookDataTerminalApplicationUpdated

## Example Usage

```typescript
import { WebhookDataTerminalApplicationUpdated } from "@moovio/sdk/models/components";

let value: WebhookDataTerminalApplicationUpdated = {
  terminalApplicationID: "b7e157fa-b2fe-469c-82e4-069eddf2a212",
  status: "enabled",
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  | Example                                                                                      |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `terminalApplicationID`                                                                      | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |                                                                                              |
| `status`                                                                                     | [components.TerminalApplicationStatus](../../models/components/terminalapplicationstatus.md) | :heavy_check_mark:                                                                           | Status of the terminal application.                                                          | enabled                                                                                      |