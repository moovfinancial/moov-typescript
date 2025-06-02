<!-- Start SDK Example Usage [usage] -->
```typescript
import { Moov } from "@moovio/sdk";

const moov = new Moov({
  security: {
    username: "",
    password: "",
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

  // Handle the result
  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->