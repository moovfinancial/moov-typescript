# TransferEventCancellationDetails

## Example Usage

```typescript
import { TransferEventCancellationDetails } from "@moovio/sdk/models/components";

let value: TransferEventCancellationDetails = {
  cancellationID: "<id>",
  status: "failed",
};
```

## Fields

| Field                                                                                                                                                                                                  | Type                                                                                                                                                                                                   | Required                                                                                                                                                                                               | Description                                                                                                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `cancellationID`                                                                                                                                                                                       | *string*                                                                                                                                                                                               | :heavy_check_mark:                                                                                                                                                                                     | A unique identifier for a Moov resource. Supports UUID format (xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx) or typed format with base32-encoded UUID and type suffix (e.g., kuoaydiojf7uszaokc2ggnaaaa_xfer). |
| `status`                                                                                                                                                                                               | [components.CancellationStatus](../../models/components/cancellationstatus.md)                                                                                                                         | :heavy_check_mark:                                                                                                                                                                                     | N/A                                                                                                                                                                                                    |