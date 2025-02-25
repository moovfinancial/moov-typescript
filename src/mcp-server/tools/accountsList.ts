/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { accountsList } from "../../funcs/accountsList.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.ListAccountsRequest$inboundSchema,
};

export const tool$accountsList: ToolDefinition<typeof args> = {
  name: "accounts_list",
  description: `List or search accounts to which the caller is connected.

All supported query parameters are optional. If none are provided the response will include all connected accounts.
Pagination is supported via the \`skip\` and \`count\` query parameters. Searching by name and email will overlap and 
return results based on relevance.

To access this endpoint using an [access token](https://docs.moov.io/api/authentication/access-tokens/) you'll need 
to specify the \`/accounts.read\` scope.`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await accountsList(
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
