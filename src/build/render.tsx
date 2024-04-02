import { outputFile } from "fs-extra";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ApplicationLetter } from "../app.component.js";
import { OUTPUT_DIRECTORY } from "./output-directory.constant.js";
import { renderWithDoctype } from "./render-with-doctype.js";

const RENDER_OUTPUT_PATH = join(OUTPUT_DIRECTORY, "index.html");
const MARKDOWN_CONENT_PATH = join(import.meta.dirname, "../content.md");

const content = await readFile(MARKDOWN_CONENT_PATH, "utf8");
const output = renderWithDoctype(<ApplicationLetter content={content} />);

await outputFile(RENDER_OUTPUT_PATH, output);
