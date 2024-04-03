import { tailwind } from "../utils/tailwind.js";

const Container = tailwind.footer(
  "container mx-auto px-4 py-8 text-center font-sans text-sm text-slate-400 sm:px-8 sm:py-12 md:px-16",
);

export function Footer() {
  return (
    <Container>
      <a
        className="underline"
        href="https://github.com/luudjanssen/tailwind-application"
      >
        Made with Tailwind
      </a>
    </Container>
  );
}
