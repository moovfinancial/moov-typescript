<!-- Start SDK Example Usage [usage] -->
```typescript
import { Moov } from "@moovio/sdk";

const moov = new Moov({
  security: {
    basicAuth: {
      username: "<YOUR_USERNAME_HERE>",
      password: "<YOUR_PASSWORD_HERE>",
      accessToken: "<YOUR_ACCESS_TOKEN_HERE>",
    },
  },
});

async function run() {
  const result = await moov.accounts.create({
    accountType: "business",
    profile: {
      business: {
        legalBusinessName: "Whole Body Fitness LLC",
      },
    },
  });

  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->