<!-- Start SDK Example Usage [usage] -->
```typescript
import { Moov } from "moov-sdk";

const moov = new Moov();

async function run() {
  const result = await moov.accounts.createAccount({
    basicAuth: {
      username: "",
      password: "",
    },
  }, {
    createAccount: {
      accountType: "business",
      profile: {
        business: {
          legalBusinessName: "Classbooker, LLC",
        },
      },
    },
  });

  // Handle the result
  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->