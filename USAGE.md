<!-- Start SDK Example Usage [usage] -->
```typescript
import { Moov } from "@moovio/sdk";

const moov = new Moov({
  xMoovVersion: "v2024.01.00",
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

  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->