# QRCode

## Example Usage

```typescript
import { QRCode } from "@moovio/sdk/models/components";

let value: QRCode = {
  qrCode:
    "iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAIAAADaA7F0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAA...",
};
```

## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     | Example                                                                         |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `qrCode`                                                                        | *string*                                                                        | :heavy_check_mark:                                                              | A base64-encoded PNG image of the QR code.                                      | iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAIAAADaA7F0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAA... |