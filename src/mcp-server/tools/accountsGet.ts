/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { accountsGet } from "../../funcs/accountsGet.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.GetAccountRequest$inboundSchema,
};

export const tool$accountsGet: ToolDefinition<typeof args> = {
  name: "accounts-get",
  description: `Retrieves details for the account with the specified ID.

To access this endpoint using an [access token](https://docs.moov.io/api/authentication/access-tokens/) you'll need 
to specify the \`/accounts/{accountID}/profile.read\` scope.`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await accountsGet(
      client,
      args.request,
      { fetchOptions: { signal: ctx.signal } },
    ).$inspect();

    if (!result.ok) {
      return {
        content: [{ type: "text", text: result.error.message }],
        isError: true,
      };
    }

    const value = result.value.result;

    return formatResult(value, apiCall);
  },
};
