# UpdateRepresentativeAddress

## Example Usage

```typescript
import { UpdateRepresentativeAddress } from "moov-sdk/models/components";

let value: UpdateRepresentativeAddress = {
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
| `addressLine1`     | *string*           | :heavy_minus_sign: | N/A                | 123 Main Street    |
| `addressLine2`     | *string*           | :heavy_minus_sign: | N/A                | Apt 302            |
| `city`             | *string*           | :heavy_minus_sign: | N/A                | Boulder            |
| `stateOrProvince`  | *string*           | :heavy_minus_sign: | N/A                | CO                 |
| `postalCode`       | *string*           | :heavy_minus_sign: | N/A                | 80301              |
| `country`          | *string*           | :heavy_minus_sign: | N/A                | US                 |