import { readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";

const root = process.cwd();
const parts = await Promise.all(
  [1, 2, 3, 4].map((part) =>
    readFile(join(root, "assets", "me-base64", `${part}.txt`), "utf8")
  )
);

await writeFile(
  join(root, "public", "me.png"),
  Buffer.from(parts.join(""), "base64")
);
