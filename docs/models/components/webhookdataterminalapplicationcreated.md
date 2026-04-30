# WebhookDataTerminalApplicationCreated

## Example Usage

```typescript
import { WebhookDataTerminalApplicationCreated } from "@moovio/sdk/models/components";

let value: WebhookDataTerminalApplicationCreated = {
  terminalApplicationID: "<id>",
  status: "enabled",
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  | Example                                                                                      |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `terminalApplicationID`                                                                      | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |                                                                                              |
| `status`                                                                                     | [components.TerminalApplicationStatus](../../models/components/terminalapplicationstatus.md) | :heavy_check_mark:                                                                           | Status of the terminal application.                                                          | enabled                                                                                      |