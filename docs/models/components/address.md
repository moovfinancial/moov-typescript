# Address

## Example Usage

```typescript
import { Address } from "@moovio/sdk/models/components";

let value: Address = {
  addressLine1: "123 Main Street",
  addressLine2: "Apt 302",
  city: "Boulder",
  stateOrProvince: "CO",
  postalCode: "80301",
  country: "US",
};
```

## Fields

| Field              | Type               | Required           | Description        | Example            |
| ------------------ | ------------------ | ------------------ | ------------------ | ------------------ |
| `addressLine1`     | *string*           | :heavy_check_mark: | N/A                | 123 Main Street    |
| `addressLine2`     | *string*           | :heavy_minus_sign: | N/A                | Apt 302            |
| `city`             | *string*           | :heavy_check_mark: | N/A                | Boulder            |
| `stateOrProvince`  | *string*           | :heavy_check_mark: | N/A                | CO                 |
| `postalCode`       | *string*           | :heavy_check_mark: | N/A                | 80301              |
| `country`          | *string*           | :heavy_check_mark: | N/A                | US                 |