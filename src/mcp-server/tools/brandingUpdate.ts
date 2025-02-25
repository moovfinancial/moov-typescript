/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { brandingUpdate } from "../../funcs/brandingUpdate.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.UpdateBrandRequest$inboundSchema,
};

export const tool$brandingUpdate: ToolDefinition<typeof args> = {
  name: "branding_update",
  description: `Updates the brand properties for the specified account.

To access this endpoint using an [access token](https://docs.moov.io/api/authentication/access-tokens/) 
you'll need to specify the \`/accounts/{accountID}/branding.write\` scope.`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await brandingUpdate(
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
