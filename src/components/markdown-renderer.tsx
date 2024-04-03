import type { JSX } from "react";
import Markdown from "react-markdown";
import { Prose } from "./prose.component.js";

export type MarkdownRendererProps = {
  children: string;
};

export function MarkdownRenderer(props: MarkdownRendererProps): JSX.Element {
  const { children } = props;

  return (
    <Prose>
      <Markdown>{children}</Markdown>
    </Prose>
  );
}
