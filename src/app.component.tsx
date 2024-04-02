import type { JSX } from "react";
import { MarkdownRenderer } from "./components/markdown-renderer.js";
import { Page } from "./components/page.component.js";
import { tailwind } from "./utils/tailwind.js";

const Body = tailwind.body("border-t-8 border-orange-500 bg-slate-100 py-16");

export type ApplicationLetterProps = {
  content: string;
};

export function ApplicationLetter(props: ApplicationLetterProps): JSX.Element {
  const { content } = props;

  return (
    <html lang="en">
      <head>
        <link href="/app.css" rel="stylesheet" />
      </head>
      <Body>
        <Page>
          <MarkdownRenderer>{content}</MarkdownRenderer>
        </Page>
      </Body>
    </html>
  );
}
