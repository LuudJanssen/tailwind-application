import { cp } from "node:fs/promises";
import { join } from "node:path";
import { OUTPUT_DIRECTORY } from "./output-directory.constant.js";

const PUBLIC_DIRECTORY = join(import.meta.dirname, "../../public");
const OUTPUT_PUBLIC_DIRECTORY = join(OUTPUT_DIRECTORY, "public");

await cp(PUBLIC_DIRECTORY, OUTPUT_PUBLIC_DIRECTORY, { recursive: true });
