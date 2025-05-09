/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { blobLikeSchema } from "../../types/blobs.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  FilePurpose,
  FilePurpose$inboundSchema,
  FilePurpose$outboundSchema,
} from "./filepurpose.js";

export type FileUploadRequestMultiPartFile = {
  fileName: string;
  content: ReadableStream<Uint8Array> | Blob | ArrayBuffer | Uint8Array;
};

/**
 * Request to upload a file for an account.
 */
export type FileUploadRequestMultiPart = {
  /**
   * The file to be added. Valid types are `csv`, `png`, `jpeg`, `pdf`.
   */
  file: FileUploadRequestMultiPartFile | Blob;
  /**
   * The file's purpose.
   */
  filePurpose: FilePurpose;
  /**
   * Additional metadata to be stored with the file, formatted as a JSON string.
   *
   * @remarks
   *
   * Valid keys are `representative_id`, `comment`, `requirement_id`, `error_code`.
   */
  metadata?: string | undefined;
};

/** @internal */
export const FileUploadRequestMultiPartFile$inboundSchema: z.ZodType<
  FileUploadRequestMultiPartFile,
  z.ZodTypeDef,
  unknown
> = z.object({
  fileName: z.string(),
  content: z.union([
    z.instanceof(ReadableStream<Uint8Array>),
    z.instanceof(Blob),
    z.instanceof(ArrayBuffer),
    z.instanceof(Uint8Array),
  ]),
});

/** @internal */
export type FileUploadRequestMultiPartFile$Outbound = {
  fileName: string;
  content: ReadableStream<Uint8Array> | Blob | ArrayBuffer | Uint8Array;
};

/** @internal */
export const FileUploadRequestMultiPartFile$outboundSchema: z.ZodType<
  FileUploadRequestMultiPartFile$Outbound,
  z.ZodTypeDef,
  FileUploadRequestMultiPartFile
> = z.object({
  fileName: z.string(),
  content: z.union([
    z.instanceof(ReadableStream<Uint8Array>),
    z.instanceof(Blob),
    z.instanceof(ArrayBuffer),
    z.instanceof(Uint8Array),
  ]),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace FileUploadRequestMultiPartFile$ {
  /** @deprecated use `FileUploadRequestMultiPartFile$inboundSchema` instead. */
  export const inboundSchema = FileUploadRequestMultiPartFile$inboundSchema;
  /** @deprecated use `FileUploadRequestMultiPartFile$outboundSchema` instead. */
  export const outboundSchema = FileUploadRequestMultiPartFile$outboundSchema;
  /** @deprecated use `FileUploadRequestMultiPartFile$Outbound` instead. */
  export type Outbound = FileUploadRequestMultiPartFile$Outbound;
}

export function fileUploadRequestMultiPartFileToJSON(
  fileUploadRequestMultiPartFile: FileUploadRequestMultiPartFile,
): string {
  return JSON.stringify(
    FileUploadRequestMultiPartFile$outboundSchema.parse(
      fileUploadRequestMultiPartFile,
    ),
  );
}

export function fileUploadRequestMultiPartFileFromJSON(
  jsonString: string,
): SafeParseResult<FileUploadRequestMultiPartFile, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => FileUploadRequestMultiPartFile$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'FileUploadRequestMultiPartFile' from JSON`,
  );
}

/** @internal */
export const FileUploadRequestMultiPart$inboundSchema: z.ZodType<
  FileUploadRequestMultiPart,
  z.ZodTypeDef,
  unknown
> = z.object({
  file: z.lazy(() => FileUploadRequestMultiPartFile$inboundSchema),
  filePurpose: FilePurpose$inboundSchema,
  metadata: z.string().optional(),
});

/** @internal */
export type FileUploadRequestMultiPart$Outbound = {
  file: FileUploadRequestMultiPartFile$Outbound | Blob;
  filePurpose: string;
  metadata?: string | undefined;
};

/** @internal */
export const FileUploadRequestMultiPart$outboundSchema: z.ZodType<
  FileUploadRequestMultiPart$Outbound,
  z.ZodTypeDef,
  FileUploadRequestMultiPart
> = z.object({
  file: z.lazy(() => FileUploadRequestMultiPartFile$outboundSchema).or(
    blobLikeSchema,
  ),
  filePurpose: FilePurpose$outboundSchema,
  metadata: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace FileUploadRequestMultiPart$ {
  /** @deprecated use `FileUploadRequestMultiPart$inboundSchema` instead. */
  export const inboundSchema = FileUploadRequestMultiPart$inboundSchema;
  /** @deprecated use `FileUploadRequestMultiPart$outboundSchema` instead. */
  export const outboundSchema = FileUploadRequestMultiPart$outboundSchema;
  /** @deprecated use `FileUploadRequestMultiPart$Outbound` instead. */
  export type Outbound = FileUploadRequestMultiPart$Outbound;
}

export function fileUploadRequestMultiPartToJSON(
  fileUploadRequestMultiPart: FileUploadRequestMultiPart,
): string {
  return JSON.stringify(
    FileUploadRequestMultiPart$outboundSchema.parse(fileUploadRequestMultiPart),
  );
}

export function fileUploadRequestMultiPartFromJSON(
  jsonString: string,
): SafeParseResult<FileUploadRequestMultiPart, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => FileUploadRequestMultiPart$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'FileUploadRequestMultiPart' from JSON`,
  );
}
