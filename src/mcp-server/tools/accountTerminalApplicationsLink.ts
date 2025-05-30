/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { accountTerminalApplicationsLink } from "../../funcs/accountTerminalApplicationsLink.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.LinkAccountTerminalApplicationRequest$inboundSchema,
};

export const tool$accountTerminalApplicationsLink: ToolDefinition<typeof args> =
  {
    name: "account-terminal-applications-link",
    description: `Link an account with a terminal application.

To access this endpoint using an [access token](https://docs.moov.io/api/authentication/access-tokens/) 
you'll need to specify the \`/accounts/{accountID}/terminal-applications.write\` scope.`,
    args,
    tool: async (client, args, ctx) => {
      const [result, apiCall] = await accountTerminalApplicationsLink(
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
