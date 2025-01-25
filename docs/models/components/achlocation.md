# AchLocation

## Example Usage

```typescript
import { AchLocation } from "@moovio/sdk/models/components";

let value: AchLocation = {
  address: "123 Main Street",
  city: "Boulder",
  postalCode: "80301",
  postalCodeExtension: "0000",
  state: "Colorado",
};
```

## Fields

| Field                 | Type                  | Required              | Description           | Example               |
| --------------------- | --------------------- | --------------------- | --------------------- | --------------------- |
| `address`             | *string*              | :heavy_check_mark:    | N/A                   | 123 Main Street       |
| `city`                | *string*              | :heavy_check_mark:    | N/A                   | Boulder               |
| `postalCode`          | *string*              | :heavy_check_mark:    | N/A                   | 80301                 |
| `postalCodeExtension` | *string*              | :heavy_check_mark:    | N/A                   | 0000                  |
| `state`               | *string*              | :heavy_check_mark:    | N/A                   | Colorado              |