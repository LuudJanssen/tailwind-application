import { outputFile } from "fs-extra";
import { join } from "node:path";
import { ApplicationLetter } from "./app.component.jsx";
import { renderWithDoctype } from "./render-with-doctype.js";

const outputPath = join(import.meta.dirname, "../dist/index.html");
const output = renderWithDoctype(<ApplicationLetter />);

await outputFile(outputPath, output);
