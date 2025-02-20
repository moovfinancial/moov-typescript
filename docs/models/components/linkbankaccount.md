# LinkBankAccount


## Supported Types

### `components.BankAccountPayload`

```typescript
const value: components.BankAccountPayload = {
  account: {
    holderName: "<value>",
    holderType: "business",
    accountNumber: "<value>",
    bankAccountType: "checking",
    routingNumber: "<value>",
  },
};
```

### `components.PlaidPayload`

```typescript
const value: components.PlaidPayload = {
  plaid: {
    token: "<value>",
  },
};
```

### `components.PlaidLinkPayload`

```typescript
const value: components.PlaidLinkPayload = {
  plaidLink: {
    publicToken: "<value>",
  },
};
```

### `components.MxPayload`

```typescript
const value: components.MxPayload = {
  mx: {
    authorizationCode: "<value>",
  },
};
```

