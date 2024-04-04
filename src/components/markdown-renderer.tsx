import { type JSX, type PropsWithChildren } from "react";
import Markdown, { type Components } from "react-markdown";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import hljs from "react-syntax-highlighter/dist/esm/styles/hljs";
import rehypeExtrernalLinks from "rehype-external-links";
import rehypeRaw from "rehype-raw";
import rehypeSlug from "rehype-slug";
import { Prose } from "./prose.component.js";

export type MarkdownRendererProps = {
  children: string;
};

const SafeFragment = ({ children }: PropsWithChildren) => <>{children}</>;

const components: Components = {
  code({ className, children }) {
    const language = className?.replace("language-", "");

    if (typeof children !== "string") {
      return null;
    }

    if (language === undefined) {
      return <code>{children}</code>;
    }

    return (
      <SyntaxHighlighter
        language={language}
        style={hljs.atomOneDark}
        PreTag={SafeFragment}
      >
        {children}
      </SyntaxHighlighter>
    );
  },
  img(props) {
    // We want to remove the `node` prop from the img element
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { node, ...imgProps } = props;

    return (
      // Alt text is added via `{...props}
      // eslint-disable-next-line jsx-a11y/alt-text
      <img decoding="async" fetchpriority="low" loading="lazy" {...imgProps} />
    );
  },
};

export function MarkdownRenderer(props: MarkdownRendererProps): JSX.Element {
  const { children } = props;

  return (
    <Prose>
      <Markdown
        components={components}
        rehypePlugins={[
          rehypeRaw,
          rehypeSlug,
          [rehypeExtrernalLinks, { target: "_blank", rel: [] }],
        ]}
      >
        {children}
      </Markdown>
    </Prose>
  );
}
