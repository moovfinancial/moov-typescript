# Metadata

JSON-encoded metadata to update for the image.

Omit this field if not updating metadata, or send `null` to clear existing metadata.

## Example Usage

```typescript
import { Metadata } from "@moovio/sdk/models/components";

let value: Metadata = {};
```

## Fields

| Field                           | Type                            | Required                        | Description                     |
| ------------------------------- | ------------------------------- | ------------------------------- | ------------------------------- |
| `altText`                       | *string*                        | :heavy_minus_sign:              | Alternative text for the image. |