# Cancellation

## Example Usage

```typescript
import { Cancellation } from "@moovio/sdk/models/components";

let value: Cancellation = {
  status: "completed",
  createdOn: new Date("2025-12-11T21:08:23.117Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `status`                                                                                      | [components.CancellationStatus](../../models/components/cancellationstatus.md)                | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `createdOn`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |