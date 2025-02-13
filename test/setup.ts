import { beforeAll, afterAll } from "bun:test";
import { Moov } from "@moovio/sdk";
import secrets from "./.secrets.json";

export let moov: Moov;

const verbose = process.env.VERBOSE === "1";

type Seen = {
	accountID: string;
	bankAccountID?: string;
	cardID?: string;
};

const idsSeen: Set<Seen> = new Set();

export const ids = {
	seen: (seen: Seen) => {
		idsSeen.add(seen);
	},
	cleanup: async () => {
		for (const seen of idsSeen) {
			if (seen.bankAccountID) {
				try {
					await moov.bankAccounts.disable({ accountID: seen.accountID, bankAccountID: seen.bankAccountID! });
				} catch (e) {
					// eslint-disable
				}
			}
			if (seen.cardID) {
				try {
					await moov.cards.disable({ accountID: seen.accountID, cardID: seen.cardID! });
				} catch (e) {
					// empty
				}
			}
			try {
				await moov.bankAccounts.disable({ accountID: seen.accountID, bankAccountID: seen.bankAccountID! });
			} catch (e) {
				// eslint-disable
			}
		}
	},
};

beforeAll(() => {
	if (verbose) {
		// Override global fetch to attach a logger
		const originalFetch = global.fetch;
		global.fetch = async (input: RequestInfo | URL, init?: RequestInit) => {
			const url = input instanceof Request ? input.url : input.toString();
			const headers = input instanceof Request ? input.headers : "";
			const body = input instanceof Request ? input.body : "";
			const method = init?.method || (input instanceof Request ? input.method : "");

			// Log requests
			console.log(`↗️ API Request | ${method} | URL: ${url}`);
			console.log(`Headers:`);
			console.log(headers);
			console.log(`Body:`);
			console.log(body);
			console.log("\n");

			// Make the actual request
			const response = await originalFetch(input, init);

			// Clone the response since it can only be read once
			const responseClone = response.clone();

			// Log responses
			console.log(`⬇️ API Response | ${method} | URL: ${url}`);
			console.log(`Status: ${response.status} ${response.statusText}`);
			console.log(`Headers:`);
			console.log(response.headers);
			console.log(`Body:`);
			try {
				const responseBody = await responseClone.json();
				console.log(JSON.stringify(responseBody, null, 2));
			} catch (e) {
				console.log("<non-JSON response>");
			}
			console.log("\n");

			return response;
		};

		afterAll(() => {
			global.fetch = originalFetch;
		});
		console.log("ℹ️  Logger setup complete\n\n");
	}

	moov = new Moov({
		security: {
			username: secrets.username,
			password: secrets.password,
		},
		serverURL: secrets.serverURL,
	});

	console.log("ℹ️  Moov SDK setup complete\n\n");

	afterAll(async () => {
		// Cleanup if we have the IDs available
		await ids.cleanup();
	});
});
