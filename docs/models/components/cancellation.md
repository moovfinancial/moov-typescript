# Cancellation

## Example Usage

```typescript
import { Cancellation } from "moov-sdk/models/components";

let value: Cancellation = {
  status: "pending",
  createdOn: new Date("2025-11-22T14:24:07.004Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `status`                                                                                      | [components.CancellationStatus](../../models/components/cancellationstatus.md)                | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `createdOn`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |