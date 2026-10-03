# CreateReversalSimulationResponseResult


## Supported Types

### `components.IssuedCardAuthorization`

```typescript
const value: components.IssuedCardAuthorization = {
  authorizationID: "<id>",
  issuedCardID: "<id>",
  fundingWalletID: "<id>",
  network: "shazam",
  authorizedAmount: "-14.89",
  status: "canceled",
  merchantData: {
    networkID: "<id>",
    name: "Whole Body Fitness",
    city: "San Francisco",
    country: "US",
    postalCode: "94107",
    state: "CA",
    mcc: "7298",
  },
  createdOn: new Date("2024-03-29T08:26:55.869Z"),
};
```

### `components.AuthorizationSimulationAsyncResponse`

```typescript
const value: components.AuthorizationSimulationAsyncResponse = {
  authorizationID: "<id>",
};
```

