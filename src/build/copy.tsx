import { cp } from "node:fs/promises";
import { join } from "node:path";
import { OUTPUT_DIRECTORY } from "./output-directory.constant.js";

const PUBLIC_DIRECTORY = join(import.meta.dirname, "../../public");

await cp(PUBLIC_DIRECTORY, OUTPUT_DIRECTORY, { recursive: true });
