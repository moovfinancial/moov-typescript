/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { capabilitiesDisable } from "../../funcs/capabilitiesDisable.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.DisableCapabilityRequest$inboundSchema,
};

export const tool$capabilitiesDisable: ToolDefinition<typeof args> = {
  name: "capabilities-disable",
  description:
    `Disable a specific capability that an account has requested. Read our [capabilities guide](https://docs.moov.io/guides/accounts/capabilities/) to learn more.

  To access this endpoint using an [access token](https://docs.moov.io/api/authentication/access-tokens/) 
you'll need to specify the \`/accounts/{accountID}/capabilities.write\` scope.`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await capabilitiesDisable(
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

    return formatResult(void 0, apiCall);
  },
};
