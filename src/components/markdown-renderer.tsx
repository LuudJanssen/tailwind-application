import type { JSX } from "react";
import Markdown from "react-markdown";

export type MarkdownRendererProps = {
  children: string;
};

export function MarkdownRenderer(props: MarkdownRendererProps): JSX.Element {
  const { children } = props;

  return (
    <div className="prose prose-slate lg:prose-lg">
      <Markdown>{children}</Markdown>
    </div>
  );
}
