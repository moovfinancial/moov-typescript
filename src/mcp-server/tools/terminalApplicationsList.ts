/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { terminalApplicationsList } from "../../funcs/terminalApplicationsList.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.ListTerminalApplicationsRequest$inboundSchema,
};

export const tool$terminalApplicationsList: ToolDefinition<typeof args> = {
  name: "terminal-applications-list",
  description: `List all the terminal applications for a Moov Account.

To access this endpoint using an [access token](https://docs.moov.io/api/authentication/access-tokens/) 
you'll need to specify the \`/terminalApplications.read\` scope.`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await terminalApplicationsList(
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
