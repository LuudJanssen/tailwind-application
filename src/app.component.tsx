import { tailwind } from "./utils/tailwind.js";

const Body = tailwind.body("bg-gray-50");

export function ApplicationLetter(): JSX.Element {
  return (
    <html>
      <head>
        <link href="/app.css" rel="stylesheet" />
      </head>
      <Body>
        <h1 className="text-xl">TEST</h1>
      </Body>
    </html>
  );
}
