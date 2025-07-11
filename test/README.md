1. Make sure you have `bun` [installed](https://bun.sh/docs/installation)
2. Run `bun run setup` (this will build and link the parent package) 
3. Run `bun run test` or `bun run test:verbose` to see all the Requests and Responses
4. Create a moov API Key and create the `.secrets.json` file in this folder with this format:
```json
{
  "username": "publicKey",
  "password": "privateKey",
  "serverURL": "https://dashboard.moov-staging.io/api/"
}

```

ℹ️️ Running `bun run test` will automatically build the parent project to make sure you're always testing the latest version 
