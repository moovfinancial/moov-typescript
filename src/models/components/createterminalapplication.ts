/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  TerminalApplicationPlatform,
  TerminalApplicationPlatform$inboundSchema,
  TerminalApplicationPlatform$outboundSchema,
} from "./terminalapplicationplatform.js";

/**
 * Describes a create terminal application request.
 */
export type CreateTerminalApplication = {
  /**
   * Platform of the terminal application.
   */
  platform: TerminalApplicationPlatform;
  /**
   * The app bundle identifier of the terminal application. Required if platform is `ios`.
   */
  appBundleID?: string | undefined;
  /**
   * The app package name of the terminal application. Required if platform is `android`.
   */
  packageName?: string | undefined;
  /**
   * The app version of the terminal application. Required if paltform is `android`.
   */
  sha256Digest?: string | undefined;
  /**
   * The app version of the terminal application. Required if platform is `android`.
   */
  versionCode?: string | undefined;
};

/** @internal */
export const CreateTerminalApplication$inboundSchema: z.ZodType<
  CreateTerminalApplication,
  z.ZodTypeDef,
  unknown
> = z.object({
  platform: TerminalApplicationPlatform$inboundSchema,
  appBundleID: z.string().optional(),
  packageName: z.string().optional(),
  sha256Digest: z.string().optional(),
  versionCode: z.string().optional(),
});

/** @internal */
export type CreateTerminalApplication$Outbound = {
  platform: string;
  appBundleID?: string | undefined;
  packageName?: string | undefined;
  sha256Digest?: string | undefined;
  versionCode?: string | undefined;
};

/** @internal */
export const CreateTerminalApplication$outboundSchema: z.ZodType<
  CreateTerminalApplication$Outbound,
  z.ZodTypeDef,
  CreateTerminalApplication
> = z.object({
  platform: TerminalApplicationPlatform$outboundSchema,
  appBundleID: z.string().optional(),
  packageName: z.string().optional(),
  sha256Digest: z.string().optional(),
  versionCode: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateTerminalApplication$ {
  /** @deprecated use `CreateTerminalApplication$inboundSchema` instead. */
  export const inboundSchema = CreateTerminalApplication$inboundSchema;
  /** @deprecated use `CreateTerminalApplication$outboundSchema` instead. */
  export const outboundSchema = CreateTerminalApplication$outboundSchema;
  /** @deprecated use `CreateTerminalApplication$Outbound` instead. */
  export type Outbound = CreateTerminalApplication$Outbound;
}

export function createTerminalApplicationToJSON(
  createTerminalApplication: CreateTerminalApplication,
): string {
  return JSON.stringify(
    CreateTerminalApplication$outboundSchema.parse(createTerminalApplication),
  );
}

export function createTerminalApplicationFromJSON(
  jsonString: string,
): SafeParseResult<CreateTerminalApplication, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateTerminalApplication$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateTerminalApplication' from JSON`,
  );
}
