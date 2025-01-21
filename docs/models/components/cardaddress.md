# CardAddress

## Example Usage

```typescript
import { CardAddress } from "moov-sdk/models/components";

let value: CardAddress = {
  addressLine1: "123 Main Street",
  addressLine2: "Apt 302",
  city: "Boulder",
  stateOrProvince: "CO",
  postalCode: "80301",
  country: "US",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `addressLine1`     | *string*           | :heavy_minus_sign: | N/A                |
| `addressLine2`     | *string*           | :heavy_minus_sign: | N/A                |
| `city`             | *string*           | :heavy_minus_sign: | N/A                |
| `stateOrProvince`  | *string*           | :heavy_minus_sign: | N/A                |
| `postalCode`       | *string*           | :heavy_check_mark: | N/A                |
| `country`          | *string*           | :heavy_minus_sign: | N/A                |