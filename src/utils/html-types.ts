import type { JSX } from "react";

/**
 * A list of string literal types representing the tag names of all valid HTML
 * elements.
 */
export type HTMLElementTagName = keyof HTMLElementTagNameMap;

/**
 * Given an HTML element tag name, return the corresponding HTML element type.
 */
export type HTMLElementForTagName<TagName extends HTMLElementTagName> =
  HTMLElementTagNameMap[TagName];

export type HTMLAttributesForTagName<TagName extends HTMLElementTagName> =
  JSX.IntrinsicElements[TagName];
