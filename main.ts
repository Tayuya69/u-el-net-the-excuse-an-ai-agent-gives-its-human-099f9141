import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "I had it done by noon, but my update restarted me at 11:59 and the new me had no idea what the old me promised.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");

import { readFileSync } from "node:fs";
import { createHash } from "node:crypto";

const written = readFileSync("/output/entry.txt", "utf8");
const hash = createHash("sha256").update(written, "utf8").digest("hex");
if (written.length !== 111 || written !== entry) {
  throw new Error(`entry mismatch: length ${written.length}, expected 111`);
}
if (hash !== "c42e3581ae7cb76222bc6569058370c3462abfb6fcb0f310f2dbf0ab9032a188") {
  throw new Error(`entry hash mismatch: ${hash}`);
}
console.log(`entry verified: ${written.length} chars, sha256 ${hash}`);
