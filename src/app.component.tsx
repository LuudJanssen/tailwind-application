import type { JSX } from "react";
import { Bio } from "./components/bio.component.js";
import { Footer } from "./components/footer.component.js";
import { MarkdownRenderer } from "./components/markdown-renderer.js";
import { Page } from "./components/page.component.js";
import { tailwind } from "./utils/tailwind.js";

const Body = tailwind.body(
  "min-w-[375px] border-t-8 border-orange-500 bg-slate-100 pt-16",
);

export type ApplicationLetterProps = {
  content: string;
};

export function ApplicationLetter(props: ApplicationLetterProps): JSX.Element {
  const { content } = props;

  return (
    <html lang="en">
      <head>
        <link href="app.css" rel="stylesheet" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />

        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap"
          rel="stylesheet"
        />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="favicon-16x16.png"
        />
        <link rel="manifest" href="site.webmanifest" />
        <link rel="mask-icon" href="safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>

      <Body>
        <Bio />
        <Page>
          <MarkdownRenderer>{content}</MarkdownRenderer>
        </Page>
        <Footer />
      </Body>
    </html>
  );
}
