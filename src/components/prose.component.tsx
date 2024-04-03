import type { PropsWithChildren } from "react";
import { tailwind } from "../utils/tailwind.js";

export type ProseProps = PropsWithChildren;

export const Prose = tailwind.div(
  "prose prose-slate mx-auto ",
  "prose-headings:text-slate-700",
  "prose-a:text-orange-500",
  "prose-strong:text-slate-700",
  "prose-figure:mx-auto prose-figure:w-[calc(100%-theme(spacing.8))] md:prose-figure:w-[calc(100%-theme(spacing.16))]",
  "prose-img:rounded-md prose-img:shadow-lg",
  "prose-blockquote:text-slate-400",
);
