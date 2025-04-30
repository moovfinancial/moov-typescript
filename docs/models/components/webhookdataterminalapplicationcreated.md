# WebhookDataTerminalApplicationCreated

## Example Usage

```typescript
import { WebhookDataTerminalApplicationCreated } from "@moovio/sdk/models/components";

let value: WebhookDataTerminalApplicationCreated = {
  terminalApplicationID: "09302c78-642c-440e-b2e0-d13499983a55",
  status: "enabled",
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  | Example                                                                                      |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `terminalApplicationID`                                                                      | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |                                                                                              |
| `status`                                                                                     | [components.TerminalApplicationStatus](../../models/components/terminalapplicationstatus.md) | :heavy_check_mark:                                                                           | Status of the terminal application.                                                          | enabled                                                                                      |