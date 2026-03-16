import type { Thing, WithContext } from "schema-dts";

/**
 * Serialize a type-checked schema.org entity for use in a JSON-LD script tag.
 *
 * Pass a `WithContext<T>` object (i.e. any schema.org type plus `"@context"`) and receive
 * the corresponding JSON string.  The TypeScript types come from the `schema-dts` package,
 * which is auto-generated from the official Schema.org vocabulary, so the compiler catches
 * unknown properties and wrong value types at build time.
 */
export function toJsonLd<T extends Thing>(schema: WithContext<T>): string {
  return JSON.stringify(schema);
}
