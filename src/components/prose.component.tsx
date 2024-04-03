import type { PropsWithChildren } from "react";
import { tailwind } from "../utils/tailwind.js";

export type ProseProps = PropsWithChildren;

export const Prose = tailwind.div(
  "prose prose-slate mx-auto ",
  "prose-headings:text-slate-700",
  "prose-a:text-orange-500",
  "prose-strong:text-slate-700",
  "prose-img:mx-auto prose-img:w-[calc(100%-theme(spacing.8))] prose-img:rounded-md prose-img:shadow-lg md:prose-img:w-[calc(100%-theme(spacing.16))]",
  "prose-blockquote:text-slate-400",
);
